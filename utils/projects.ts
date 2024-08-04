export const projectList: {
  title: string,
  image: string,
  content: string,
  gh_url: string,
  live_url?: string,
  details_url: string,
  skills: string[];
}[] = [
    {
      title: "Vaidya Ai",
      image: "/coding.png",
      content: "An AI tool for identifying medicinal plants and delivering personalized Ayurvedic remedies.",
      gh_url: "https://github.com/lordvader501/vaidya_ai",
      details_url: "/",
      skills: ["Angular", "Flask", "Docker", "Nginx", "Weaviate", "OpenAi"]
    },
    {
      title: "Pokelister",
      image: "/coding.png",
      content: "A dynamic web application for Pokémon enthusiasts, providing extensive listings and detailed information on all Pokémon species.",
      live_url: "https://test-white--pokelister.netlify.app/",
      gh_url: "https://github.com/lordvader501/pokelister",
      details_url: "/",
      skills: ["ReactJs", "TypeScript", "Firebase", "SCSS"]
    },
    {
      title: "CodeinBlogs",
      image: "/coding.png",
      content: "A blogging platform for coders, streamlining the process of posting, editing, and deleting content, while promoting community interaction through shared post viewing.",
      live_url: "https://codeblocks123.pythonanywhere.com/",
      gh_url: "https://github.com/lordvader501/blog-django",
      details_url: "/",
      skills: ["Python", "Django", "Sqlite", "HTML", "CSS", "Bootstrap"]
    },
  ];
