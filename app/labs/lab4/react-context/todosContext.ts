"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TodoItem {
    id: string;
    title: string;
}
interface TodosContextState {
   todos: TodoItem[];
   todo: TodoItem; 
   setTodo: (todo: TodoItem) => void;
    addTodo: () => void;
  deleteTodo: (id: string) => void;
  updateTodo: () => void;
}

export default function TodosProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<TodoItem[]>([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ]);
    const [todo, setTodo] = useState(0);
    
    
}
