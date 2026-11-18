import type { Professional } from "../config/salon"

export const professionals: Professional[] = [
  {
    id: 1,
    name: "Mariana Costa",
    specialty: "Cabelista Master",
    description: "10 anos de experiência em cortes e colorações técnicas.",
    services: ["Cortes Femininos", "Hidratação", "Coloração"],
    image: "/professionals/mariana.jpg",
  },
  {
    id: 2,
    name: "Roberta Silva",
    specialty: "Colorista",
    description: "Especialista em colorações avançadas e tratamentos capilares.",
    services: ["Coloração", "Hidratação", "Progressiva"],
    image: "/professionals/roberta.jpg",
  },
  {
    id: 3,
    name: "Julia Alves",
    specialty: "Manicure e Design de Sobrancelhas",
    description: "Cuidado com unhas e design personalizado de sobrancelhas.",
    services: ["Manicure Simples", "Alongamento de Unhas", "Design e Depilação"],
    image: "/professionals/julia.jpg",
  },
]