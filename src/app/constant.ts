export const common = {
    ALPHABETS: '^[a-zA-Z ]*$',
    ALPHA_NUMERIC: '^[a-zA-Z0-9 ]*$',
    URL: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    ALPHA_NUMERIC_AND_SPECIAL: /^[a-zA-Z0-9!@#$%^&*().,<>?/;:'"{}+=_~`\-\[\] ]+$/,
    NUMBERS: '^[0-9 ]*$',
    NUMERIC_SPECIAL: /^[0-9!@#$%^&*().,<>?/;:'"{}\[\]+=_~`\- ]+$/,
    ALP_NUM_LIM_SPE : /^[A-Za-z0-9.@# ]+$/,
    EMPTY_SPACE: /^(?!\s*$).+/,
    EMPTY_SPACE_TEXT_AREA: /^(?!\s*$)[\s\S]+/
}

export const exAgency = ['regeneration', 'recruitee'];

export const domestic = ['naukri', 'foundit', 'otherDomestic'];

export const proposedWorkFlow = ['AI Ranking', 'Discovery Phase', 'PQQ', 'Qualification', 'Assesment', 'Interview Questions', 'CEO interview', 'Work Order', 'BGV', 'Onboarding Applicant'];

export const bgv = 'bgv';

export const suggestedWorkFlow = 'suggestedWorkFlow';

export const formValidStatus = {
    'stage 1': 'INVALID',
    'stage 2': 'INVALID',
    'stage 3': 'INVALID',
    'stage 4': 'INVALID',
    'stage 5': 'INVALID',
}

export const jobDescriptionValue = {
    'OPTION1': 'Directly write the Job titles',
    'OPTION2': 'continue by selecting the below'
}

export const educationalRequirementDropDownValue = [
    'Vocational/Technical Certifications',
    'High School Diploma or Equivalent',
    'Associate Degree',
    `Bachelor's Degree`,
    'Doctoral Degree (Ph.D., MD, etc.)'
]

export const educationalRequirementValues =
    `Vocational/Technical Certifications: Relevant for roles requiring specific technical skills (e.g., HVAC certification, CompTIA A+ certification).
     High School Diploma or Equivalent: A common baseline for many positions.
     Associate Degree: Demonstrates further education, may be preferred for some roles.
     Bachelor's Degree: Standard requirement for many professional positions.
     Doctoral Degree (Ph.D., MD, etc.): Typically for research-heavy, academic, or some medical roles.`


 export const roleCategoryValue = [
    'Entry-Level',
    'Individual Contributor',
    'Team Leader',
    'Manager',
    'Senior-Level',
    'Executive' 
]



export const geoLocationAPI = 'https://geojs.srv.waymore.io/geo.js'
