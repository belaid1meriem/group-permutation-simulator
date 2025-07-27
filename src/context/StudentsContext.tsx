import React, { createContext, useContext, useState, ReactNode } from "react";

export type Student = {
  matricule: string;
  fromG: string;
  toG: string;
  date: string;
};

type StudentsContextType = {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
};

const StudentsContext = createContext<StudentsContextType | undefined>(undefined);

export const StudentsProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([
    {matricule: "22/01", fromG: "G01", toG: "G02", date: "2025-02-28 14:30:45.123456"},
    {matricule: "22/02", fromG: "G02", toG: "G03", date: "2025-02-28 14:31:10.654321"},
    {matricule: "22/03", fromG: "G03", toG: "G04", date: "2025-02-28 14:32:05.987654"},
    {matricule: "22/04", fromG: "G04", toG: "G05", date: "2025-02-28 14:33:20.111222"},

    
    {matricule: "22/11", fromG: "G11", toG: "G12", date: "2025-02-28 14:40:45.987654"},
    {matricule: "22/12", fromG: "G12", toG: "G13", date: "2025-02-28 14:41:50.111222"},
    {matricule: "22/14", fromG: "G14", toG: "G15", date: "2025-02-28 14:43:15.444555"},
    {matricule: "22/15", fromG: "G15", toG: "G01", date: "2025-02-28 14:44:00.666777"},  // Cycle created
    
    {matricule: "22/16", fromG: "G02", toG: "G10", date: "2025-02-28 14:45:20.888999"},
    {matricule: "22/17", fromG: "G10", toG: "G07", date: "2025-02-28 14:46:50.000111"},
    {matricule: "22/18", fromG: "G07", toG: "G05", date: "2025-02-28 14:47:10.222333"},
    {matricule: "22/19", fromG: "G05", toG: "G13", date: "2025-02-28 14:48:40.444555"},
    {matricule: "22/20", fromG: "G13", toG: "G02", date: "2025-02-28 14:49:55.666777"},  // Another cycle
    
    {matricule: "22/21", fromG: "G03", toG: "G15", date: "2025-02-28 14:50:30.888999"},
    {matricule: "22/22", fromG: "G15", toG: "G06", date: "2025-02-28 14:51:45.000111"},
    {matricule: "22/23", fromG: "G06", toG: "G12", date: "2025-02-28 14:52:50.222333"},
    {matricule: "22/24", fromG: "G12", toG: "G08", date: "2025-02-28 14:53:40.444555"},
    {matricule: "22/25", fromG: "G08", toG: "G04", date: "2025-02-28 14:54:25.666777"},
    
    
    {matricule: "22/29", fromG: "G01", toG: "G11", date: "2025-02-28 14:58:10.444555"},
    {matricule: "22/30", fromG: "G11", toG: "G14", date: "2025-02-28 14:59:55.666777"}
]);

  return (
    <StudentsContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentsContext.Provider>
  );
};


export const useStudents = () => {
  const context = useContext(StudentsContext);
  if (!context) throw new Error("useStudents must be used within a StudentsProvider");
  return context;
};
