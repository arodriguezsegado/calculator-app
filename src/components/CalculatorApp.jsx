import { useState } from 'react';

export const CalculatorApp = () =>{

    const [ display, setDisplay ] = useState('');
    const [ alert, setAlert ] = useState('');

    const onInputCalc = ({ target }) => {
        setDisplay(display + target.textContent);
        setAlert('');
    }

    const onClearDisplay = () => {
        setDisplay('');
        setAlert('');
    }

    const onEvalExpression = () => {
        try {
            const evalExpression = eval(display);
            setDisplay(eval(display));
        } catch(error) {
            console.log(error.message)
            setAlert(error.message);
            setDisplay('');
        }
    }

    return (

        <div className="container text-center mt-5">

            <div className="row">
            <div className="col-3"></div>
                {
                    (!alert) 
                    ?  <div className="col-6 alert alert-primary d-none" role="alert">{ alert }</div>
                    :  <div className="col-6 alert alert-primary" role="alert">{ alert }</div>
                }
                <div className="col-3"></div>
            </div>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <input 
                        className="form-control col-12 text-end"
                        readOnly
                        value={ (!!display) ? display : '0' }
                    />
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row mt-2">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-secondary w-100">(</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-secondary w-100">)</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-secondary w-100">%</button></div>
                        <div className="col"><button onClick={ onClearDisplay } className="btn btn-secondary w-100">AC</button></div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row mt-2">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-primary w-100">7</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-primary w-100">8</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-primary w-100">9</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-secondary  w-100">/</button></div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row mt-2">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col"><button onClick={ onInputCalc }className="btn btn-primary w-100">4</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-primary w-100">5</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-primary w-100">6</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-secondary w-100">*</button></div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row mt-2">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-primary w-100">1</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-primary w-100">2</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-primary w-100">3</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-secondary  w-100">-</button></div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row mt-2">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-primary w-100">0</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-primary w-100">.</button></div>
                        <div className="col"><button onClick={ onEvalExpression } className="btn btn-outline-primary w-100">=</button></div>
                        <div className="col"><button onClick={ onInputCalc } className="btn btn-secondary  w-100">+</button></div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>

        </div>

    );
}