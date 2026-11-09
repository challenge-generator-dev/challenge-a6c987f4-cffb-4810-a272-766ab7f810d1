# Optimización de Rendimiento en Aplicaciones Web

El portal transaccional de la institución financiera presenta tiempos de carga lentos, afectando la experiencia del usuario. Como desarrollador avanzado en Angular, debes aplicar conceptos de Core Web Vitals para identificar y resolver cuellos de botella en el rendimiento de la aplicación. Los principales actores son los usuarios del portal, el equipo de desarrollo y el equipo de operaciones. El objetivo es mejorar el tiempo de carga del portal para ofrecer una experiencia de usuario más rápida y eficiente.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | optimizacion de rendimiento en aplicaciones web (reg 1109) |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 20 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis de Rendimiento

**Objetivo:** Identificar los principales cuellos de botella en el rendimiento del portal transaccional.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Realiza un análisis de rendimiento utilizando herramientas de perfilado y auditoría de rendimiento.
- Identifica los componentes y secciones del portal que tienen tiempos de carga más lentos.

**Entregable:** Informe de análisis de rendimiento que detalla los componentes y secciones con problemas de rendimiento.

<details>
<summary>Pistas de conocimiento</summary>

- Conceptos de Core Web Vitals:  Largest Contentful Paint (LCP), First Input Delay (FID), Cumulative Layout Shift (CLS).
- Herramientas de perfilado y auditoría de rendimiento en Angular.

</details>

### Fase 2: Optimización de Código

**Objetivo:** Aplicar técnicas de optimización de código para mejorar el rendimiento de los componentes y secciones identificadas en la fase anterior.

**Tiempo estimado:** 10 horas

**Instrucciones:**

- Implementa técnicas de optimización de código, como la minimización de recursos, la carga diferida y la eliminación de código innecesario.
- Verifica que las optimizaciones aplicadas no afecten la funcionalidad y la experiencia del usuario.

**Entregable:** Código optimizado de los componentes y secciones identificadas en la fase de análisis de rendimiento.

<details>
<summary>Pistas de conocimiento</summary>

- Técnicas de optimización de código en Angular: minimización de recursos, carga diferida, eliminación de código innecesario.
- Pruebas de rendimiento y verificación de la experiencia del usuario.

</details>

### Fase 3: Evaluación y Documentación

**Objetivo:** Evaluar el impacto de las optimizaciones aplicadas y documentar el proceso de optimización.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- Realiza pruebas de rendimiento para evaluar el impacto de las optimizaciones aplicadas.
- Documenta el proceso de optimización, incluyendo las técnicas utilizadas y los resultados obtenidos.

**Entregable:** Informe de evaluación y documentación del proceso de optimización.

<details>
<summary>Pistas de conocimiento</summary>

- Pruebas de rendimiento en Angular.
- Documentación técnica y de procesos.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los Core Web Vitals y por qué son importantes para el rendimiento de una aplicación web?
- **paraQueSirve**: ¿Cómo se aplican los conceptos de Core Web Vitals para identificar y resolver problemas de rendimiento en una aplicación Angular?
- **comoSeUsa**: ¿Qué técnicas de optimización de código se pueden aplicar en Angular para mejorar el rendimiento de una aplicación web?
- **erroresComunes**: ¿Cuáles son los errores comunes al aplicar técnicas de optimización de código en Angular y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones se deben tomar al aplicar técnicas de optimización de código en Angular para garantizar que no afecten la funcionalidad y la experiencia del usuario?

## Criterios de Evaluacion

- Identificación correcta de los principales cuellos de botella en el rendimiento del portal transaccional.
- Aplicación efectiva de técnicas de optimización de código en Angular.
- Verificación de que las optimizaciones aplicadas no afectan la funcionalidad y la experiencia del usuario.
- Documentación clara y completa del proceso de optimización.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
