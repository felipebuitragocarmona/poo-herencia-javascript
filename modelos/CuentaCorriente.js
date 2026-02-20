class CuentaCorriente extends Cuenta {
    constructor(titular, saldo, limiteSobregiro) {
        super(titular, saldo);
        this.limiteSobregiro = limiteSobregiro;
    }

    retirar(monto) {
        if (monto <= this.saldo + this.limiteSobregiro) {
            this.saldo -= monto;
        } else {
            console.log("Supera el límite de sobregiro");
        }
    }
}