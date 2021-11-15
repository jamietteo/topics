// Primitive types

type Nullish =
  | null
  | undefined;

type Names =
  | 'luis'
  | 'miguel'
  | 'jorge';

type Num =
  | number
  | bigint;

// Union types

type Fruit =
  | 'apple'
  | 'pear'
  | 'orange';

type Vegetable =
  | 'broccoli'
  | 'carrot'
  | 'lettuce';

// 'apple' | 'pear' | 'orange' | 'broccoli' | 'carrot' | 'lettuce';
type HealthyFoods = Fruit | Vegetable;

// Function types
type Add = (x: number, y: number) => number;
const sum: Add = (a, b) => a + b;
