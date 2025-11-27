export interface Cat {
  id: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  color: string;
  imageUrl: string;
  microchipId: string;
  adoptionDate: string;
  personality: string[];
  medicalNotes?: string;
}

export interface CareTask {
  id: string;
  catId: string;
  type: 'feeding' | 'medication' | 'grooming' | 'playtime' | 'litter' | 'other';
  title: string;
  description: string;
  time: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  completed: boolean;
  lastCompleted?: string;
}

export interface HealthRecord {
  id: string;
  catId: string;
  type: 'vaccination' | 'checkup' | 'surgery' | 'dental' | 'emergency' | 'other';
  title: string;
  date: string;
  veterinarian: string;
  clinic: string;
  notes: string;
  cost?: number;
  nextDue?: string;
  documents?: string[];
}

export interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
  image?: string;
}
