document.addEventListener("DOMContentLoaded", function () {

    let cuentas = [];

    function nextId() {
        let max = 0;
        for (let i = 0; i < cuentas.length; i++) {
            if (cuentas[i].id > max) max = cuentas[i].id;
        }
        return max + 1;
    }

    function guardar() {
        const data = cuentas.map(function (x) {
            return {
                id: x.id,
                tipo: x.tipo,
                titular: x.cuenta.titular,
                saldo: x.cuenta.saldo,
                limiteSobregiro:x.tipo === "corriente" ? x.cuenta.limiteSobregiro : 0
            };
        });

        StorageCuentas.save(data);
    }

    function cargar() {
        const data = StorageCuentas.load();

        cuentas = data.map(function (r) {
            let cuenta;

            if (r.tipo === "corriente") {
                cuenta = new CuentaCorriente(
                    r.titular,
                    Number(r.saldo),
                    Number(r.limiteSobregiro)
                );
            } else {
                cuenta = new CuentaAhorros(
                    r.titular,
                    Number(r.saldo)
                );
            }

            return {
                id: Number(r.id),
                tipo: r.tipo,
                cuenta: cuenta
            };
        });
    }

    // ===== UI =====
    const titularEl = document.getElementById("titular");
    const saldoEl = document.getElementById("saldo");
    const tipoEl = document.getElementById("tipo");
    const sobregiroEl = document.getElementById("sobregiro");
    const tbody = document.getElementById("tbodyCuentas");
    const btnCrear = document.getElementById("btnCrear");

    function render() {
        let filas = "";

        for (let i = 0; i < cuentas.length; i++) {
            const x = cuentas[i];

            const sob =
                x.tipo === "corriente"
                    ? x.cuenta.limiteSobregiro
                    : "-";

            filas +=
                "<tr>" +
                "<td>" + x.id + "</td>" +
                "<td>" + x.cuenta.titular + "</td>" +
                "<td>" + x.tipo + "</td>" +
                "<td>" + x.cuenta.saldo + "</td>" +
                "<td>" + sob + "</td>" +
                "</tr>";
        }

        tbody.innerHTML = filas;
    }

    // ===== Crear =====
    btnCrear.addEventListener("click", function () {

        const titular = titularEl.value;
        const saldo = Number(saldoEl.value || 0);
        const tipo = tipoEl.value;

        let cuenta;

        if (tipo === "corriente") {
            const limite = Number(sobregiroEl.value || 0);
            cuenta = new CuentaCorriente(titular, saldo, limite);
        } else {
            cuenta = new CuentaAhorros(titular, saldo);
        }

        cuentas.push({
            id: nextId(),
            tipo: tipo,
            cuenta: cuenta
        });

        guardar();
        render();

        titularEl.value = "";
        saldoEl.value = 0;
        sobregiroEl.value = 0;
    });

    // ===== Init =====
    cargar();
    render();

});