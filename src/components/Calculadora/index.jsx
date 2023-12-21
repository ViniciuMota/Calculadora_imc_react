import { useState } from 'react'
import styles from './calculadora.module.css'
import { useEffect } from 'react'

const Calculadora = () =>{
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState(0.00)

    useEffect(() =>{
        setImc(peso/(Math.pow(altura, 2)))
    }, [altura, peso])

    return(
        <div className={styles.container}>
            <label>Altura</label>
            <input className={styles.inputAltura} onChange={(e) => setAltura(e.target.value)} type="number" placeholder="digite sua altura em metros"/>
            <label>Peso</label>
            <input className={styles.inputPeso} onChange={(e) => setPeso(e.target.value)} type="number" placeholder="digite seu peso em Kilos"/>

            <h3> Seu IMC é: {imc.toFixed(2)}</h3>

            
				<table className={styles.tabela}>

                    <thead>
                        <tr>
                            <td colSpan="3">Veja a interpretação do IMC</td>
                        </tr>
                    </thead>

                    <tbody>						
                        <tr >
                            <td>IMC</td>
                            <td>Classificação</td>
                            <td>Obesidade <small>(grau)</small></td>
                        </tr>
                        
                        <tr>
                            <td>Menor que 18,5</td>
                            <td>Magreza</td>
                            <td>0</td>
                        </tr>
                        
                        <tr>
                            <td>Entre 18,5 e 24,9</td>
                            <td>Normal</td>
                            <td>0</td>
                        </tr>
                        
                        <tr>
                            <td>Entre 25,0 e 29,9</td>
                            <td>Sobrepeso</td>
                            <td>I</td>
                        </tr>
                        
                        <tr>
                            <td>Entre 30,0 e 39,9</td>
                            <td>Obesidade</td>
                            <td>II</td>
                        </tr>

                        <tr>
                            <td>Maior que 40,0</td>
                            <td>Obesidade Grave</td>
                            <td>III</td>
                        </tr>
                    </tbody>

                </table>
        </div>
    )
}

export default Calculadora