import React, {useState} from "react"
import { LanguageContext } from "../context/Context"
import { useContext } from 'react'

const countries = [
{
    label: "España",
    link: " ",
    loc: "ES",
},
{
    label: "United States",
    link: " ",
    loc: "US",
},
];


export default function SelectLanguage() {
    const { setLanguage } = useContext(LanguageContext);
    const [country, setCountry] = useState(countries.label);
    const [open, setOpen] = useState(false);

const handleChange = event => {
    if (event.target.value.includes('United States')){
    setLanguage('EN')
    console.log(event.target.value)
    } else {
    setLanguage('ES')
    }
    setCountry(event.target.value);
};

const handleClose = () => {
    setOpen(false);
};

const handleOpen = () => {
    setOpen(true);
};

return (
<div className="inline-block relative w-30">
        <select open={open}
            onOpen={handleClose}
            onClose={handleOpen}
            value={country}
            name="country"
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
{countries.map((option, key) => (
    <option value={option.label} key={key}>{option.loc}</option>))}
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
</div>
</div>
);
}