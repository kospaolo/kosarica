import { Equipment } from './app/shared/models/Equipment';

export const sample_equipment: Equipment[] = [
  {
    id: '1',
    name: 'Treadmill',
    description: 'A high-quality treadmill for cardio workouts',
    price: 1200,
    tags: ['cardio', 'running'],
    favourite: false,
    image: 'assets/images/treadmill.jpg',
  },
  {
    id: '2',
    name: 'Dumbbell',
    description: 'Adjustable dumbbells for strength training',
    price: 300,
    tags: ['strength', 'weights'],
    favourite: false,
    image: 'assets/images/dumbbell.jpg',
  },
  {
    id: '3',
    name: 'Exercise Bike',
    description: 'A stationary bike for indoor cycling',
    price: 1500,
    tags: ['cardio', 'cycling'],
    favourite: true,
    image: 'assets/images/exercise_bike.jpg',
  },
  {
    id: '4',
    name: 'Kettlebell',
    description: 'A versatile kettlebell for various exercises',
    price: 50,
    tags: ['strength', 'weights'],
    favourite: false,
    image: 'assets/images/kettlebell.jpg',
  },
  {
    id: '5',
    name: 'Rowing Machine',
    description: 'A rowing machine for full-body cardio workouts',
    price: 900,
    tags: ['cardio', 'rowing'],
    favourite: true,
    image: 'assets/images/rowing_machine.jpg',
  },
];
