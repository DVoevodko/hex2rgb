import { useState } from "react";

function hexToRgb(hex) {
  const result = hex.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  //console.log('result = ',result);
  if (result) return 'rgb('+ parseInt(result[1],16) +','+ parseInt(result[2],16) +','+ parseInt(result[3],16) +')';
  return 'err';
}

export function Hex2rgb() {
    const[form,setForm]=useState({
    colorHex: '',
    colorRgb: 'err',
    });
    const handleSubmit = (e) => {
      e.preventDefault();
    }
    const handleNameChange = ({target}) => {
      const {name, value} = target;
      const rgbColor = hexToRgb(value);
      if (rgbColor !== 'err') {
        document.body.style.background = rgbColor;
      }
      setForm(prevForm => ({...prevForm, [name]: value, 'colorRgb':rgbColor}));
    }
    return (
    <div style={{textAlign: "center"}}>
    <form onSubmit={handleSubmit}>
      <div>
      <input
         id="colorHex" name="colorHex"
         onChange={handleNameChange}/>
      </div>
      <label htmlFor="name">{form.colorRgb === 'err'?'Ошибка!':form.colorRgb}</label>
    </form>
    </div>
    )

}
   