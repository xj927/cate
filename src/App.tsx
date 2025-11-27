import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CatProfiles from './pages/CatProfiles';
import CatDetail from './pages/CatDetail';
import CareSchedule from './pages/CareSchedule';
import HealthRecords from './pages/HealthRecords';
import Community from './pages/Community';
import Resources from './pages/Resources';
import { Cat, CareTask, HealthRecord, Post } from './types';

function App() {
  const [cats, setCats] = useState<Cat[]>([
    {
      id: '1',
      name: 'Luna',
      breed: 'Siamese',
      age: 3,
      weight: 4.5,
      color: 'Seal Point',
      imageUrl: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg',
      microchipId: 'MC123456789',
      adoptionDate: '2021-03-15',
      personality: ['Playful', 'Vocal', 'Affectionate'],
      medicalNotes: 'Allergic to chicken-based foods'
    },
    {
      id: '2',
      name: 'Shadow',
      breed: 'Maine Coon',
      age: 5,
      weight: 7.2,
      color: 'Black Smoke',
      imageUrl: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg',
      microchipId: 'MC987654321',
      adoptionDate: '2019-08-22',
      personality: ['Gentle', 'Independent', 'Curious'],
      medicalNotes: 'Regular dental checkups needed'
    },
    {
      id: '3',
      name: 'Mochi',
      breed: 'Scottish Fold',
      age: 2,
      weight: 3.8,
      color: 'White',
      imageUrl: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg',
      microchipId: 'MC456789123',
      adoptionDate: '2022-01-10',
      personality: ['Shy', 'Sweet', 'Quiet'],
      medicalNotes: 'Sensitive stomach'
    }
  ]);

  const [careTasks, setCareTasks] = useState<CareTask[]>([
    {
      id: '1',
      catId: '1',
      type: 'feeding',
      title: 'Morning Feeding',
      description: 'Wet food - 1/2 can',
      time: '08:00',
      frequency: 'daily',
      completed: true,
      lastCompleted: new Date().toISOString()
    },
    {
      id: '2',
      catId: '1',
      type: 'medication',
      title: 'Allergy Medication',
      description: 'Antihistamine tablet',
      time: '20:00',
      frequency: 'daily',
      completed: false
    },
    {
      id: '3',
      catId: '2',
      type: 'grooming',
      title: 'Brush Fur',
      description: 'Long-haired breed needs daily brushing',
      time: '18:00',
      frequency: 'daily',
      completed: true,
      lastCompleted: new Date().toISOString()
    },
    {
      id: '4',
      catId: '2',
      type: 'feeding',
      title: 'Evening Feeding',
      description: 'Dry food - 1 cup',
      time: '19:00',
      frequency: 'daily',
      completed: false
    },
    {
      id: '5',
      catId: '3',
      type: 'playtime',
      title: 'Interactive Play',
      description: 'Feather wand - 15 minutes',
      time: '17:00',
      frequency: 'daily',
      completed: false
    },
    {
      id: '6',
      catId: '1',
      type: 'litter',
      title: 'Clean Litter Box',
      description: 'Scoop and refresh',
      time: '21:00',
      frequency: 'daily',
      completed: false
    }
  ]);

  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([
    {
      id: '1',
      catId: '1',
      type: 'vaccination',
      title: 'Rabies Vaccine',
      date: '2024-01-15',
      veterinarian: 'Dr. Sarah Johnson',
      clinic: 'Paws & Claws Veterinary',
      notes: 'Annual booster administered',
      nextDue: '2025-01-15'
    },
    {
      id: '2',
      catId: '1',
      type: 'checkup',
      title: 'Annual Wellness Exam',
      date: '2024-01-15',
      veterinarian: 'Dr. Sarah Johnson',
      clinic: 'Paws & Claws Veterinary',
      notes: 'Healthy weight, good dental health',
      cost: 85.00
    },
    {
      id: '3',
      catId: '2',
      type: 'dental',
      title: 'Dental Cleaning',
      date: '2023-11-20',
      veterinarian: 'Dr. Michael Chen',
      clinic: 'Paws & Claws Veterinary',
      notes: 'Two teeth extracted, recovery normal',
      cost: 450.00,
      nextDue: '2024-11-20'
    },
    {
      id: '4',
      catId: '2',
      type: 'vaccination',
      title: 'FVRCP Vaccine',
      date: '2023-08-10',
      veterinarian: 'Dr. Sarah Johnson',
      clinic: 'Paws & Claws Veterinary',
      notes: 'Core vaccine booster',
      nextDue: '2024-08-10'
    },
    {
      id: '5',
      catId: '3',
      type: 'checkup',
      title: 'New Patient Exam',
      date: '2024-02-01',
      veterinarian: 'Dr. Emily Rodriguez',
      clinic: 'Paws & Claws Veterinary',
      notes: 'Slight underweight, dietary recommendations provided',
      cost: 95.00
    },
    {
      id: '6',
      catId: '3',
      type: 'vaccination',
      title: 'Rabies Vaccine',
      date: '2024-02-01',
      veterinarian: 'Dr. Emily Rodriguez',
      clinic: 'Paws & Claws Veterinary',
      notes: 'First rabies vaccination',
      nextDue: '2025-02-01'
    }
  ]);

  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'CatLover2024',
      avatar: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg',
      content: 'Just adopted my first cat! Any tips for first-time cat parents? Luna is a 3-year-old Siamese and she\'s absolutely gorgeous! 😻',
      likes: 24,
      comments: 8,
      timestamp: '2 hours ago',
      image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg'
    },
    {
      id: '2',
      author: 'MaineCoonMom',
      avatar: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg',
      content: 'Shadow finally let me brush his entire coat without protest! It only took 5 years 😂 Patience is key with these gentle giants.',
      likes: 42,
      comments: 12,
      timestamp: '5 hours ago'
    },
    {
      id: '3',
      author: 'VetTechSarah',
      avatar: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg',
      content: 'PSA: Remember to check your cat\'s teeth regularly! Dental disease is one of the most common health issues in cats. Early detection saves money and pain.',
      likes: 67,
      comments: 15,
      timestamp: '1 day ago'
    },
    {
      id: '4',
      author: 'FelineFoodie',
      avatar: 'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg',
      content: 'Made homemade cat treats today! Recipe: chicken, pumpkin, and oat flour. My cats went CRAZY for them! 🐱',
      likes: 89,
      comments: 23,
      timestamp: '1 day ago',
      image: 'https://images.pexels.com/photos/1359307/pexels-photo-1359307.jpeg'
    },
    {
      id: '5',
      author: 'RescueWarrior',
      avatar: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg',
      content: 'Fostering my 10th litter of kittens this year! These 5 little ones are looking for forever homes. DM if interested! 💕',
      likes: 156,
      comments: 34,
      timestamp: '2 days ago',
      image: 'https://images.pexels.com/photos/1571076/pexels-photo-1571076.jpeg'
    }
  ]);

  const toggleTaskComplete = (taskId: string) => {
    setCareTasks(tasks =>
      tasks.map(task =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
              lastCompleted: !task.completed ? new Date().toISOString() : task.lastCompleted
            }
          : task
      )
    );
  };

  const addHealthRecord = (record: Omit<HealthRecord, 'id'>) => {
    const newRecord: HealthRecord = {
      ...record,
      id: Date.now().toString()
    };
    setHealthRecords([newRecord, ...healthRecords]);
  };

  const likePost = (postId: string) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard cats={cats} careTasks={careTasks} healthRecords={healthRecords} />} />
          <Route path="/cats" element={<CatProfiles cats={cats} />} />
          <Route path="/cats/:id" element={<CatDetail cats={cats} careTasks={careTasks} healthRecords={healthRecords} />} />
          <Route path="/schedule" element={<CareSchedule careTasks={careTasks} cats={cats} toggleTaskComplete={toggleTaskComplete} />} />
          <Route path="/health" element={<HealthRecords healthRecords={healthRecords} cats={cats} addHealthRecord={addHealthRecord} />} />
          <Route path="/community" element={<Community posts={posts} likePost={likePost} />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
