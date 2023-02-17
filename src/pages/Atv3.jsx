import { useRef, useState } from "react"



export default function Atv3() {
    const preco = useRef(0)
    const qnt_meses = useRef(0)
    const [parcelas, setParcelas] = useState()

    const calcularParcelas = (e) => {
        e.preventDefault();
        if (qnt_meses.current.value == 3) {
            setParcelas(parseFloat((parseInt(preco.current.value) * 1.1) / 3.0).toFixed(2))
        } else {
            setParcelas(parseFloat((parseInt(preco.current.value) * 1.2) / 5.0).toFixed(2))
        }
    }

    return (
        <form onSubmit={e => calcularParcelas(e)} className="w-96 flex flex-col gap-2">
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-center">
                    Clique para ver o enunciado
                </div>
                <div className="collapse-content">
                    <p> A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o valor
                da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for parcelado
                em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o parcelamento
                for em 5 vezes, o acréscimo será de 20%. Lembrando que são apenas as 2 opções para
                        parcelamento.</p>
                </div>
            </div>
            <label className="text-left label-text">Digite o preço:  </label>
            <input className="input" type="text" ref={preco} />

            <select className="select w-full" defaultValue="disabled" name="atvidades" id="atv" ref={qnt_meses}>
                <option value="disabled" disabled>Selecione uma opção de parcelamento: </option>
                <option value="3">3 Vezes</option>
                <option value="5">5 Vezes</option>
            </select>

            <button className="btn w-fit mx-auto">Calcular</button>
            {parcelas !== undefined ? <h1>Serão {qnt_meses.current.value} parcelas de R${parcelas}</h1> : null}
        </form>
    );
}