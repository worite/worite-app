import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:geocoding/geocoding.dart';

class LocationData {
  final double latitude;
  final double longitude;
  final String? address;

  LocationData({
    required this.latitude,
    required this.longitude,
    this.address,
  });
}

class Municipality {
  final String id;
  final String name;
  final String type;
  final String logo;
  final bool selected;

  Municipality({
    required this.id,
    required this.name,
    required this.type,
    required this.logo,
    this.selected = false,
  });
}

class LocationProvider extends ChangeNotifier {
  LocationData? _locationData;
  List<Municipality> _municipalities = [];
  Municipality? _selectedMunicipality;
  bool _isLoading = false;

  LocationData? get locationData => _locationData;
  List<Municipality> get municipalities => _municipalities;
  Municipality? get selectedMunicipality => _selectedMunicipality;
  bool get isLoading => _isLoading;

  Future<bool> requestLocationPermission() async {
    try {
      LocationPermission permission = await Geolocator.checkPermission();
      
      if (permission == LocationPermission.denied) {
        permission = await Geolocator.requestPermission();
        
        if (permission == LocationPermission.denied) {
          return false;
        }
      }
      
      if (permission == LocationPermission.deniedForever) {
        return false;
      }
      
      return true;
    } catch (e) {
      return false;
    }
  }

  Future<void> getCurrentLocation() async {
    try {
      _isLoading = true;
      notifyListeners();

      bool hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        _isLoading = false;
        notifyListeners();
        return;
      }

      Position position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high,
      );

      List<Placemark> placemarks = await placemarkFromCoordinates(
        position.latitude,
        position.longitude,
      );

      String address = '';
      if (placemarks.isNotEmpty) {
        Placemark place = placemarks[0];
        address = '${place.street ?? ''} ${place.subLocality ?? ''} ${place.locality ?? ''}'.trim();
      }

      _locationData = LocationData(
        latitude: position.latitude,
        longitude: position.longitude,
        address: address,
      );

      await loadMunicipalitiesByLocation(position.latitude, position.longitude);
      
      _isLoading = false;
      notifyListeners();
    } catch (e) {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> loadMunicipalitiesByLocation(double latitude, double longitude) async {
    // Türkiye'deki büyükşehir belediyeleri
    final turkishMunicipalities = [
      {
        'id': 'istanbul_metropolitan',
        'name': 'İstanbul Büyükşehir Belediyesi',
        'type': 'büyükşehir',
        'logo': '🏛️',
        'center': {'lat': 41.0082, 'lng': 28.9784},
        'bounds': {'north': 41.5, 'south': 40.5, 'east': 29.5, 'west': 28.5}
      },
      {
        'id': 'ankara_metropolitan',
        'name': 'Ankara Büyükşehir Belediyesi',
        'type': 'büyükşehir',
        'logo': '🏛️',
        'center': {'lat': 39.9334, 'lng': 32.8597},
        'bounds': {'north': 40.2, 'south': 39.7, 'east': 33.2, 'west': 32.5}
      },
      {
        'id': 'izmir_metropolitan',
        'name': 'İzmir Büyükşehir Belediyesi',
        'type': 'büyükşehir',
        'logo': '🏛️',
        'center': {'lat': 38.4192, 'lng': 27.1287},
        'bounds': {'north': 38.8, 'south': 38.0, 'east': 27.5, 'west': 26.8}
      },
      {
        'id': 'gaziantep_metropolitan',
        'name': 'Gaziantep Büyükşehir Belediyesi',
        'type': 'büyükşehir',
        'logo': '🏛️',
        'center': {'lat': 37.0662, 'lng': 37.3833},
        'bounds': {'north': 37.4, 'south': 36.8, 'east': 37.7, 'west': 37.1}
      },
    ];

    // Konuma göre belediye bul
    for (var municipality in turkishMunicipalities) {
      var bounds = municipality['bounds'] as Map<String, double>;
      
      if (latitude >= bounds['south']! && 
          latitude <= bounds['north']! && 
          longitude >= bounds['west']! && 
          longitude <= bounds['east']!) {
        
        _selectedMunicipality = Municipality(
          id: municipality['id'] as String,
          name: municipality['name'] as String,
          type: municipality['type'] as String,
          logo: municipality['logo'] as String,
          selected: true,
        );
        
        _municipalities = [selectedMunicipality!];
        break;
      }
    }

    // Eğer belediye bulunamazsa, tüm belediyeleri göster
    if (_municipalities.isEmpty) {
      _municipalities = turkishMunicipalities.map((m) => Municipality(
        id: m['id'] as String,
        name: m['name'] as String,
        type: m['type'] as String,
        logo: m['logo'] as String,
      )).toList();
    }
  }

  void selectMunicipality(String id) {
    for (int i = 0; i < _municipalities.length; i++) {
      _municipalities[i] = Municipality(
        id: _municipalities[i].id,
        name: _municipalities[i].name,
        type: _municipalities[i].type,
        logo: _municipalities[i].logo,
        selected: _municipalities[i].id == id,
      );
    }
    
    _selectedMunicipality = _municipalities.firstWhere((m) => m.id == id);
    notifyListeners();
  }
} 