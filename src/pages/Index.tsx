
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Salad,
  Scale,
  Heart,
  ChefHat,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  isNew,
}: {
  icon: any;
  title: string;
  description: string;
  isNew?: boolean;
}) => (
  <Card className="relative p-6 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-wellness-mint group">
    {isNew && (
      <span className="absolute -top-2 -right-2 bg-wellness-forest text-white px-2 py-1 rounded-full text-xs">
        New!
      </span>
    )}
    <div className="flex flex-col items-center text-center gap-4">
      <div className="p-3 rounded-full bg-wellness-mint text-wellness-forest group-hover:bg-wellness-forest group-hover:text-white transition-colors duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-wellness-forest">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </Card>
);

const features = [
  {
    icon: Salad,
    title: "Compare Foods",
    description: "Make informed choices by comparing nutritional values of different foods",
  },
  {
    icon: Heart,
    title: "Track Nutrition",
    description: "Monitor your daily intake with detailed nutrition tracking",
  },
  {
    icon: Scale,
    title: "BMI Calculator",
    description: "Calculate and track your BMI progress over time",
  },
  {
    icon: ChefHat,
    title: "Healthy Recipes",
    description: "Discover and save nutritious meal ideas",
  },
  {
    icon: Calculator,
    title: "Calorie Counter",
    description: "Track your daily calorie intake and set goals",
    isNew: true,
  },
  {
    icon: Heart,
    title: "Wellness Journal",
    description: "Record your daily wellness activities and mood",
    isNew: true,
  },
  {
    icon: Leaf,
    title: "Meditation Timer",
    description: "Set timers for your mindfulness practice",
    isNew: true,
  },
  {
    icon: Scale,
    title: "Progress Tracker",
    description: "Visualize your wellness journey with charts",
    isNew: true,
  },
];

const Index = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    if (weightNum && heightNum) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBmi(parseFloat(bmiValue.toFixed(1)));
    }
  };

  return (
    <div className="min-h-screen bg-wellness-mint/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-2 bg-wellness-sage/10 rounded-full mb-4">
              <Leaf className="w-6 h-6 text-wellness-forest" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-wellness-forest mb-6">
              Your Complete Wellness Journey
            </h1>
            <p className="text-xl text-wellness-leaf mb-8 max-w-2xl mx-auto">
              Transform your lifestyle with our comprehensive wellness tracking tools.
              Start your journey to a healthier, happier you today.
            </p>
            <Button className="bg-wellness-forest text-white hover:bg-wellness-leaf transition-colors">
              Begin Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-wellness-mint/30 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-wellness-forest text-center mb-12">
            Everything You Need for Your Wellness Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-wellness-forest text-center mb-8">
            BMI Calculator
          </h2>
          <Card className="p-6">
            <form onSubmit={calculateBMI} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter weight in kg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Height (m)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter height in meters"
                  required
                  step="0.01"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-wellness-forest text-white hover:bg-wellness-leaf transition-colors"
              >
                Calculate BMI
              </Button>
            </form>
            {bmi && (
              <div className="mt-4 p-4 bg-wellness-mint/30 rounded-md text-center">
                <p className="text-lg font-semibold text-wellness-forest">
                  Your BMI: {bmi}
                </p>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-wellness-forest text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of others who have transformed their lives with our
            comprehensive wellness tracking tools. All the features you need in one place.
          </p>
          <Button className="bg-white text-wellness-forest hover:bg-wellness-mint transition-colors">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
