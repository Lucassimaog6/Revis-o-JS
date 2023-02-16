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
        <form onSubmit={e => calcularParcelas(e)} className="w-60 text-center flex flex-col gap-2">
            <small>
                A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o valor
                da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for parcelado
                em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o parcelamento
                for em 5 vezes, o acréscimo será de 20%. Lembrando que são apenas as 2 opções para
                parcelamento.
            </small>
            <label className="text-left">Digite o preço:  </label>
            <input type="text" ref={preco} />

            <label htmlFor="atv">
                <select defaultValue="disabled" name="atvidades" id="atv" ref={qnt_meses}>
                    <option value="disabled" disabled>Selecione uma opção de parcelamento: </option>
                    <option value="3">3 Vezes</option>
                    <option value="5">5 Vezes</option>
                </select>
            </label>

            <button>Calcular</button>
            {parcelas !== undefined ? <h1>Serão {qnt_meses.current.value} parcelas de R${parcelas}</h1> : null}
        </form>
    );
}