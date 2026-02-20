# Demo POO — Herencia (Cuentas Bancarias)

Proyecto de ejemplo que muestra principios de Programación Orientada a Objetos (POO) y herencia aplicados a un sistema bancario simple.

## Resumen

Es una pequeña aplicación que modela cuentas bancarias (cuenta base, cuenta de ahorros y cuenta corriente), un controlador para operar sobre las cuentas, y una capa de almacenamiento/visualización.

## Estructura del proyecto

- **acceso_datos/**: lógica de persistencia/almacenamiento (ej. `StorageCuentas.js`).
- **modelos/**: clases del dominio:
  - `Cuenta.js` — clase base con propiedades y métodos comunes.
  - `CuentaAhorros.js` — extiende `Cuenta`, añade comportamiento específico.
  - `CuentaCorriente.js` — extiende `Cuenta`, añade límites o métodos propios.
- **negocio/**: lógica de negocio y controlador:
  - `ControladorCuentas.js` — maneja operaciones como crear cuentas, depositar, retirar y listar.
- **presentacion/**: interfaz de usuario estática:
  - `vistas/Cuentas.html` — vista para interactuar con el sistema.
  - `estilos/` — estilos CSS usados por la vista.

## Qué hace

- Modela distintos tipos de cuentas mediante herencia.
- Permite operaciones comunes: crear cuenta, depositar, retirar, consultar saldo y listar cuentas.
- Separa responsabilidades entre modelos (datos), negocio (reglas/servicios) y presentación (UI).

## Cómo ejecutar

1. Abrir el archivo de la vista en un navegador: [presentacion/vistas/Cuentas.html](presentacion/vistas/Cuentas.html)
   - No requiere servidor; basta con abrir el fichero localmente si la interfaz es estática.
2. Interactuar con la UI para crear cuentas y probar depósitos/extracciones.



## Extender el proyecto

- Añadir nuevos tipos de cuenta creando nuevas clases que extiendan `Cuenta`.
- Implementar validaciones adicionales en `ControladorCuentas.js`.
- Reemplazar `StorageCuentas.js` por una implementación que use LocalStorage, IndexedDB o un backend real.

## Notas

- Código orientado a la enseñanza de herencia y separación por capas.
- Ideal como base para practicar pruebas unitarias, persistencia real y mejoras de UI.


