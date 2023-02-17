import { useNavigate } from 'react-router-dom'

export default function Home() {
    const pages = [1, 2, 3, 4, 5]
    const navigate = useNavigate()

    const handleSelection = (e) => {
        navigate(`/${e.target.value}`)
    }
    return (
        <div className=" w-96 flex flex-col gap-2" >
            < div className="collapse" >
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-center">
                    Clique para ver o enunciado
                </div>
                <div className="collapse-content">
                    <p>Faça um script que contenha um menu de seleção deste exercício e execute os mesmos
                        mediante seleção: Ex. selecionei 1, deve executar a primeira atividade e assim por diante.</p>
                </div>
            </div >
            <select className="select w-full" onChange={e => handleSelection(e)}>
                <option disabled selected>Selecione sua atividade</option>
                <option value="1">Atividade 1</option>
                <option value="2">Atividade 2</option>
                <option value="3">Atividade 3</option>
                <option value="4">Atividade 4</option>
                <option value="5">Atividade 5</option>
            </select>
        </div >
    );
}