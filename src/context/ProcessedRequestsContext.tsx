import React, { createContext, useContext, useState, ReactNode } from "react";


export interface PermutationRequest {
  matricule: string;
  fromG: string;
  toG: string;
}

type ProcessedRequestsContextType = {
  processedRequests: PermutationRequest[];
  setProcessedRequests: React.Dispatch<React.SetStateAction<PermutationRequest[]>>;
};

const ProcessedRequestsContext = createContext<ProcessedRequestsContextType | undefined>(undefined);

export const ProcessedRequestsProvider = ({ children }: { children: ReactNode }) => {
  const [processedRequests, setProcessedRequests ] = useState<PermutationRequest[]>([])
  return (
    <ProcessedRequestsContext.Provider value={{ processedRequests, setProcessedRequests }}>
      {children}
    </ProcessedRequestsContext.Provider>
  );
};


export const useProcessedRequestsContext = () => {
  const context = useContext(ProcessedRequestsContext);
  if (!context) throw new Error("useProcessedRequests must be used within a ProcessedRequestsProvider");
  return context;
};
