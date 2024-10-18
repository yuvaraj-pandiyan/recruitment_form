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
