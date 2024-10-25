export interface DropDownValue {
    name: string;
    value: string;
}

const roleTypeList: DropDownValue[] = [
    {
        name: 'Admin',
        value: 'Admin'
    },
    {
        name: 'User', 
        value: 'User'
    },
    {
        name: 'Manager',
        value: 'Manager'
    },
    {
        name: 'Developer',
        value: 'Developer'
    },
    {
        name: 'Designer', 
        value: 'Designer'
    },
    {
        name: 'Analyst',
        value: 'Analyst'
    },
    {
        name: 'Tester',
        value: 'Tester'
    },
    {
        name:   'Customer Support', 
        value:   'Customer Support'
    },
    {
        name: 'Sales',
        value: 'Sales'
    },
    {
        name: 'Marketing',
        value: 'Marketing'
    }


];
const seniorityLevelList: DropDownValue[] = [
    {
        name: 'Intern',
        value: 'Intern'
    },
    {
        name: 'Junior',
        value: 'Junior'
    },
    {
        name: 'Mid-Level',
        value: 'Mid-Level'
    },
    {
        name: 'Senior',
        value: 'Senior'
    },
    {
        name: 'Lead',
        value: 'Lead'
    },
    {
        name: 'Manager',
        value: 'Manager'
    },
    {
        name: 'Director',
        value: 'Director'
    },
    {
        name: 'Vice President',
        value: 'Vice President'
    },
    {
        name: 'C-Level',
        value: 'C-Level'
    },
    {
        name: 'Founder/Owner',
        value: 'Founder/Owner'
    }
];

const workExperienceList: DropDownValue[] = [
    {
        name: 'Entry-Level (0-1 years)',
        value: 'Entry-Level (0-1 years)'
    },
    {
        name: '1-3 Years',
        value: '1-3 Years'
    },
    {
        name: '3-5 Years',
        value: '3-5 Years'
    },
    {
        name: '5-7 Years',
        value: '5-7 Years'
    },
    {
        name: '7-10 Years',
        value: '7-10 Years'
    },
    {
        name: '10+ Years',
        value: '10+ Years'
    },
    {
        name: 'Internship Experience',
        value: 'Internship Experience'
    },
    {
        name: 'Freelance Experience',
        value: 'Freelance Experience'
    },
    {
        name: 'Project-Based Experience',
        value: 'Project-Based Experience'
    },
    {
        name: 'Managerial Experience',
        value: 'Managerial Experience'
    }
];

const relevantWorkExperienceList: DropDownValue[] = [
    {
        name: 'None Required',
        value: 'None Required'
    },
    {
        name: 'Less than 1 Year',
        value: 'Less than 1 Year'
    },
    {
        name: '1-2 Years',
        value: '1-2 Years'
    },
    {
        name: '2-4 Years',
        value: '2-4 Years'
    },
    {
        name: '4-6 Years',
        value: '4-6 Years'
    },
    {
        name: '6-8 Years',
        value: '6-8 Years'
    },
    {
        name: '8-10 Years',
        value: '8-10 Years'
    },
    {
        name: '10+ Years',
        value: '10+ Years'
    },
    {
        name: 'Relevant Experience Preferred',
        value: 'Relevant Experience Preferred'
    },
    {
        name: 'Extensive Experience Required',
        value: 'Extensive Experience Required'
    }

    // 'None Required',
    // '',
    // '',
    // '2-4 Years',
    // '',
    // '6-8 Years',
    // '8-10 Years',
    // '10+ Years',
    // 'Relevant Experience Preferred',
    // 'Extensive Experience Required'
];
const industryList: DropDownValue[] = [
    {
        name: 'Technology',
        value: 'Technology'
    },
    {
        name: 'Healthcare',
        value: 'Healthcare'
    },
    {
        name: 'Finance',
        value: 'Finance'
    },
    {
        name: 'Education',
        value: 'Education'
    },
    {
        name: 'Retail',
        value: 'Retail'
    },
    {
        name: 'Manufacturing',
        value: 'Manufacturing'
    },
    {
        name: 'Transportation',
        value: 'Transportation'
    },
    {
        name: 'Hospitality',
        value: 'Hospitality'
    },
    {
        name: 'Real Estate',
        value: 'Real Estate'
    },
    {
        name: 'Energy',
        value: 'Energy'
    }
  ];
  const departmentList: DropDownValue[] = [
    {
        name: 'Human Resources',
        value: 'Human Resources'
    },
    {
        name: 'Finance',
        value: 'Finance'
    },
    {
        name: 'Marketing',
        value: 'Marketing'
    },
    {
        name: 'Sales',
        value: 'Sales'
    },
    {
        name: 'Engineering',
        value: 'Engineering'
    },
    {
        name: 'Product Management',
        value: 'Product Management'
    },
    {
        name: 'Customer Support',
        value: 'Customer Support'
    },
    {
        name: 'Research and Development',
        value: 'Research and Development'
    },
    {
        name: 'Information Technology',
        value: 'Information Technology'
    },
    {
        name: 'Legal',
        value: 'Legal'
    }
];

const noOfPositionsList: DropDownValue[] = [
    {
        name: '1 Position',
        value: '1 Position'
    },
    {
        name: '2 Position',
        value: '2 Position'
    },
    {
        name: '3 Position',
        value: '3 Position'
    },
    {
        name: '4 Position',
        value: '4 Position'
    },
    {
        name: '5 Position',
        value: '5 Position'
    },
    {
        name: '6-10 Position',
        value:'6-10 Position'
    },
    {
        name: '11-20 Position',
        value: '11-20 Position'
    },
    {
        name: '21-50 Position',
        value: '21-50 Position'
    },
    {
        name: '50-100 Position',
        value: '50-100 Position'
    },
    {
        name: '100+ Position',
        value: '100+ Position'
    },
 
];


export {
    roleTypeList,
    seniorityLevelList,
    workExperienceList,
    relevantWorkExperienceList,
    industryList,
    departmentList,
    noOfPositionsList
}