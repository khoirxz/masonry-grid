type dataProps = {
  id: number;
  title: string;
  description: string;
  dataResource: string;
  type: "potrait" | "landscape";
  dataFormat: "image" | "video";
};

export const data: dataProps[] = [
  {
    id: 1,
    title: "Foto saya",
    description: "Foto saya saat berada di kantor",
    dataResource:
      "https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "potrait",
    dataFormat: "image",
  },
  {
    id: 2,
    title: "Gunung bromo",
    description: "Gunung bromo yang terletak di provinsi jawa timur",
    dataResource:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "landscape",
    dataFormat: "image",
  },
  {
    id: 3,
    title: "Pura bali",
    description: "Bedugul yang terletak di bali",
    dataResource:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "potrait",
    dataFormat: "image",
  },
  {
    id: 4,
    title: "Nusa penida",
    description: "Pantai nusa penida yang terletak di bali",
    dataResource:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "landscape",
    dataFormat: "image",
  },
  {
    id: 5,
    title: "Pura bali",
    description: "Bedugul yang terletak di bali",
    dataResource:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "potrait",
    dataFormat: "image",
  },
];
