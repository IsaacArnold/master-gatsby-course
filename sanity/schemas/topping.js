import { FaPepperHot as icon } from "react-icons/fa";

export default {
  name: "topping",
  title: "Toppings",
  type: "document",
  icon: icon,
  fields: [
    {
      name: "name",
      title: "Topping name",
      type: "string",
      description: "What is the name of the topping?",
    },
    {
      name: "vegetarian",
      title: "Vegetarian",
      type: "boolean",
      description: "What is the name of the topping?",
      options: {
        layout: "checkbox",
      },
    },
  ],
  //   Sets the title in the Sanity Studio UI
  preview: {
    //   Selecting the name and vegetarian feilds from above
    select: {
      name: "name",
      vegetarian: "vegetarian",
    },
    // Destructuring the name and vegetarian fields out of the fields object
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? "🌱 " : ""}`,
    }),
  },
};
