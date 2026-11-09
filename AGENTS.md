# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Optimización de Rendimiento en Aplicaciones Web**.

| | |
|---|---|
| Tema | optimizacion de rendimiento en aplicaciones web (reg 1109) |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | Angular |
| Stack | TypeScript / Angular 20 |
| Patron arquitectonico | modular con lazy loading y componentes standalone |
| Tiempo estimado | 20 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, angular.json y tsconfig.json en la raiz`
- `src/main.ts con bootstrapApplication`
- `src/app/app.config.ts con los providers`
- `src/app/core con servicios y modelos`
- `src/app/features con componentes contenedores`
- `src/app/shared con componentes presentacionales`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET y el proyecto no instala. Usa rango con caret sobre una version que exista.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.
- Angular necesita `angular.json` y `tsconfig.json` ademas del `package.json`, o `ng build` no corre.

Dependencias:

- @angular/core 20.2.0
- @angular/common 20.2.0
- @angular/compiler 20.2.0
- @angular/platform-browser 20.2.0
- @angular/platform-browser-dynamic 20.2.0
- @angular/router 20.2.0
- @angular/forms 20.2.0
- @angular/animations 20.2.0
- @angular/material 20.2.0
- rxjs 7.8.0
- zone.js 0.14.4
- typescript 5.8.0
- @angular-devkit/build-angular 20.2.0
- @angular/cli 20.2.0
- @angular-eslint/schematics n/a
- eslint 8.56.0
- prettier 3.2.5
- web-vitals 3.5.2
- ngx-build-plus n/a

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Análisis de Rendimiento**: Informe de análisis de rendimiento que detalla los componentes y secciones con problemas de rendimiento.
- **Fase 2 — Optimización de Código**: Código optimizado de los componentes y secciones identificadas en la fase de análisis de rendimiento.
- **Fase 3 — Evaluación y Documentación**: Informe de evaluación y documentación del proceso de optimización.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (25)

- `package.json`
- `angular.json`
- `tsconfig.json`
- `src/app/core/services/performance.service.ts`
- `src/main.ts`
- `src/index.html`
- `src/app/app.component.ts`
- `src/app/app.config.ts`
- `src/app/app.routes.ts`
- `src/app/features/dashboard/dashboard.component.ts`
- `src/app/features/dashboard/dashboard.component.html`
- `src/app/features/dashboard/dashboard.component.scss`
- `src/app/shared/components/transaction-card/transaction-card.component.ts`
- `src/app/shared/components/transaction-card/transaction-card.component.html`
- `src/styles/_critical.scss`
- `src/environments/environment.ts`
- `src/environments/environment.interface.ts`
- `src/environments/environment.prod.ts`
- `README.md`
- `src/app/core/models/performance.model.ts`
- `src/app/core/utils/web-vitals-wrapper.ts`
- `src/app/core/interceptors/auth.interceptor.ts`
- `src/app/core/interceptors/error.interceptor.ts`
- `src/app/features/transactions/transactions.routes.ts`
- `src/app/features/reports/reports.routes.ts`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/app/core`
- `src/app/features`
- `src/app/shared`
- `src/assets`
- `src/styles`
- `src/environments`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **modular con lazy loading y componentes standalone**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Advanced
- Brecha que el reto ataca: Aplica conceptos de Core Web Vitals y los usa para tomar decisiones de codigo que potencien soluciones en el contexto de negocio
- Mision: Mejorar el tiempo de carga del portal transaccional

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
