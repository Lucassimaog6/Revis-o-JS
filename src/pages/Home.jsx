import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    const handleSelection = (e) => {
        navigate(`/${e.target.value}`)
    }
    return (
        <label htmlFor="atv" >
            Atividades:
            <select onChange={e => handleSelection(e)} defaultValue="disabled" name="atvidades" id="atv">
                <option value="disabled" disabled>Selecione uma atividade</option>
                <option value="1">Atv 1</option>
                <option value="2">Atv 2</option>
                <option value="3">Atv 3</option>
                <option value="4">Atv 4</option>
                <option value="5">Atv 5</option>
            </select>
        </label>
    );
}