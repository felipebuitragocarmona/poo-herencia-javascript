class Cuenta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto) {
        this.saldo += monto;
    }

    retirar(monto) {
        throw new Error("El método retirar() debe ser implementado");
    }
}