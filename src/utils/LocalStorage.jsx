

const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "firstname": "Aarav",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare monthly report",
        "taskDescription": "Compile the financial data for the month.",
        "taskDate": "2024-12-10",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Organize team meeting",
        "taskDescription": "Set up and host the weekly team sync.",
        "taskDate": "2024-12-01",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Review Q3 expenses",
        "taskDescription": "Check and verify Q3 financial records.",
        "taskDate": "2024-12-05",
        "category": "Finance"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstname": "Vihaan",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer onboarding",
        "taskDescription": "Guide new clients through the onboarding process.",
        "taskDate": "2024-12-12",
        "category": "Client Relations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Resolve ticket #2345",
        "taskDescription": "Address a technical issue raised by the client.",
        "taskDate": "2024-12-02",
        "category": "Support"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update CRM database",
        "taskDescription": "Add new client data and clean up old entries.",
        "taskDate": "2024-12-15",
        "category": "Support"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstname": "Ishaan",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Market analysis",
        "taskDescription": "Research market trends for the Q4 review.",
        "taskDate": "2024-12-11",
        "category": "Analysis"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Update client profiles",
        "taskDescription": "Refresh outdated profiles in the CRM.",
        "taskDate": "2024-12-04",
        "category": "Client Relations"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Competitor analysis",
        "taskDescription": "Evaluate competitors' new product launches.",
        "taskDate": "2024-12-20",
        "category": "Analysis"
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstname": "Arjun",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop feature XYZ",
        "taskDescription": "Write and test code for the new feature.",
        "taskDate": "2024-12-15",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Code review",
        "taskDescription": "Review pull requests from the dev team.",
        "taskDate": "2024-12-05",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix bug #1234",
        "taskDescription": "Resolve the login issue reported by users.",
        "taskDate": "2024-12-14",
        "category": "Development"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstname": "Rohan",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Vendor negotiation",
        "taskDescription": "Negotiate contracts with new vendors.",
        "taskDate": "2024-12-20",
        "category": "Procurement"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Inventory check",
        "taskDescription": "Audit the stock levels in the warehouse.",
        "taskDate": "2024-12-03",
        "category": "Logistics"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Supplier evaluation",
        "taskDescription": "Assess the performance of current suppliers.",
        "taskDate": "2024-12-18",
        "category": "Procurement"
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  }
];

    
      const admin= [
        {
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
      ];
    
    export const setLocalStorage = () => {
  
          localStorage.setItem('employees', JSON.stringify(employees))                //saveing the items in local storage
        localStorage.setItem('admin', JSON.stringify(admin))  

                                                                    
    }


    export const getLocalStorage = () => {

    const employees =  (JSON.parse(localStorage.getItem('employees'))) 
    const admin =  (JSON.parse(localStorage.getItem('admin'))) 

    return {employees,admin}
    
    }


