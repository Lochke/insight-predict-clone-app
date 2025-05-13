
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

export function PredictionForm() {
  const [timeframe, setTimeframe] = useState("month");
  const [confidence, setConfidence] = useState([85]);
  const [dataPoints, setDataPoints] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate prediction process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Prediction generated successfully!", {
        description: "New forecast data is now available on your dashboard.",
      });
    }, 1500);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate Prediction</CardTitle>
        <CardDescription>
          Configure your prediction model parameters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="data-points">Data Points</Label>
              <Input
                id="data-points"
                placeholder="Enter comma-separated values"
                value={dataPoints}
                onChange={(e) => setDataPoints(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Enter numeric values separated by commas
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timeframe">Prediction Timeframe</Label>
              <Select
                value={timeframe}
                onValueChange={setTimeframe}
              >
                <SelectTrigger id="timeframe">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Next Week</SelectItem>
                  <SelectItem value="month">Next Month</SelectItem>
                  <SelectItem value="quarter">Next Quarter</SelectItem>
                  <SelectItem value="year">Next Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="confidence">Confidence Level: {confidence}%</Label>
            </div>
            <Slider
              id="confidence"
              min={50}
              max={99}
              step={1}
              value={confidence}
              onValueChange={setConfidence}
            />
            <p className="text-xs text-muted-foreground">
              Higher confidence requires more training data
            </p>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSubmit} 
          disabled={isLoading || !dataPoints} 
          className="w-full bg-insight-600 hover:bg-insight-700"
        >
          {isLoading ? "Generating Prediction..." : "Generate Prediction"}
        </Button>
      </CardFooter>
    </Card>
  );
}
