// Cuenta Ahorros implementa su versión
class CuentaAhorros extends Cuenta {
    retirar(monto) {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("Fondos insuficientes");
        }
    }
}