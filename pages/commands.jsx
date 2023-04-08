import { useState } from 'react';

const categories = [
  {
    name: "Information",
    commands: [
      {
        name: "Help",
        description: "Get help with using the bot."
      },
      {
        name: "User",
        description: "Get information about a user."
      }
    ]
  },
  {
    name: "Economy",
    commands: [
      {
        name: "Servers",
        description: "Get information about the servers the bot is in."
      },
      {
        name: "Members",
        description: "Get information about the members in a server."
      }
    ]
  },
  {
    name: "Utility",
    commands: [
      {
        name: "Ping",
        description: "Get the latency of the bot."
      },
      {
        name: "Poll",
        description: "Create a poll for members to vote on."
      }
    ]
  }
];

export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [buttonColor, setButtonColor] = useState("bg-blue-500");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setButtonColor("bg-blue-500");
  }

  const buttonStyle = (color) => {
    return `rounded-md py-2 px-4 font-medium hover:opacity-80 transition duration-200 text-white ${color}`
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <div key={category.name} className="w-full md:w-1/3 px-2 mb-4">
            <button
              className={buttonStyle(selectedCategory.name === category.name ? buttonColor : "bg-gray-300")}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap mt-10">
        {selectedCategory.commands.map((command) => (
          <div key={command.name} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 h-full">
              <div className="font-medium mb-2">{command.name}</div>
              <div className="text-gray-500">{command.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
