import { createContext, FC, useContext, useState} from "react";

    const CounterContext = createContext({
      counter: 0,
      onchangeCounter: (value: number): void => {}, 
    });
    
    export const useCounterContext = () => useContext(CounterContext);
    
    export const CounterContextProvider: FC = ({ children }) => {
      const [counter, setCounter] = useState<number>(0);
    
      const onchangeCounter = (value: number): void => {
        setCounter(value);
      };

      const value = {
        counter,
        onchangeCounter,
     };
      return <CounterContext.Provider value={value} children={children} />;
    };