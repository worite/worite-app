import React, { createContext, ReactNode, useContext, useState } from 'react';

interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
}

interface SelectedMunicipality {
  id: string;
  name: string;
  type: 'büyükşehir' | 'ilçe';
}

interface LocationContextType {
  locationData: LocationData | null;
  setLocationData: (data: LocationData | null) => void;
  selectedMunicipalities: SelectedMunicipality[];
  setSelectedMunicipalities: (municipalities: SelectedMunicipality[]) => void;
  allMunicipalities: any[];
  setAllMunicipalities: (municipalities: any[]) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [selectedMunicipalities, setSelectedMunicipalities] = useState<SelectedMunicipality[]>([]);
  const [allMunicipalities, setAllMunicipalities] = useState<any[]>([]);

  return (
    <LocationContext.Provider value={{ 
      locationData, 
      setLocationData, 
      selectedMunicipalities, 
      setSelectedMunicipalities,
      allMunicipalities,
      setAllMunicipalities
    }}>
      {children}
    </LocationContext.Provider>
  );
}; 