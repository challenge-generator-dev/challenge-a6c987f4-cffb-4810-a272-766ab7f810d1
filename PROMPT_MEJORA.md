# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Advanced

### Brecha de conocimiento
Aplica conceptos de Core Web Vitals y los usa para tomar decisiones de codigo que potencien soluciones en el contexto de negocio

### Misión / candidato
Mejorar el tiempo de carga del portal transaccional

### Datos adicionales
Candidato con 3 años en Angular

### Reto
- Tema: optimizacion de rendimiento en aplicaciones web (reg 1109)
- Seniority: advanced-l2
- Tipo: practical
- Título: Optimización de Rendimiento en Aplicaciones Web
- Tiempo estimado: 20 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Análisis de Rendimiento — objetivo: Identificar los principales cuellos de botella en el rendimiento del portal transaccional. — entregable (NO resolver): Informe de análisis de rendimiento que detalla los componentes y secciones con problemas de rendimiento.
- Fase 2: Optimización de Código — objetivo: Aplicar técnicas de optimización de código para mejorar el rendimiento de los componentes y secciones identificadas en la fase anterior. — entregable (NO resolver): Código optimizado de los componentes y secciones identificadas en la fase de análisis de rendimiento.
- Fase 3: Evaluación y Documentación — objetivo: Evaluar el impacto de las optimizaciones aplicadas y documentar el proceso de optimización. — entregable (NO resolver): Informe de evaluación y documentación del proceso de optimización.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "financial-portal",
  "version": "0.0.1",
  "scripts": {
    "ng": "ng",
    "start": "ng serve --port=4200 --open",
    "build": "ng build --configuration production --optimization --source-map=false --named-chunks=false --vendor-chunk=false --output-hashing=all",
    "build:stats": "ng build --configuration production --stats-json",
    "watch": "ng build --watch --configuration development",
    "test": "ng test --code-coverage --watch=false",
    "lint": "ng lint",
    "lint:fix": "ng lint --fix",
    "format": "prettier --write \"src/**/*.{ts,html,scss,json}\"",
    "audit": "web-vitals --path=/dashboard --thresholds=LCP:2500,FID:100,CLS:0.1",
    "analyze": "source-map-explorer dist/financial-portal/*.js",
    "preinstall": "npm install -g @angular/cli@20.2.0"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "20.2.0",
    "@angular/common": "20.2.0",
    "@angular/compiler": "20.2.0",
    "@angular/core": "20.2.0",
    "@angular/forms": "20.2.0",
    "@angular/material": "20.2.0",
    "@angular/platform-browser": "20.2.0",
    "@angular/platform-browser-dynamic": "20.2.0",
    "@angular/router": "20.2.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.4",
    "web-vitals": "^3.5.2"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "20.2.0",
    "@angular/cli": "20.2.0",
    "@angular/compiler-cli": "20.2.0",
    "@angular-eslint/builder": "17.3.0",
    "@angular-eslint/eslint-plugin": "17.3.0",
    "@angular-eslint/eslint-plugin-template": "17.3.0",
    "@angular-eslint/schematics": "17.3.0",
    "@angular-eslint/template-parser": "17.3.0",
    "@types/node": "^20.11.19",
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsdoc": "^48.0.2",
    "eslint-plugin-prettier": "^5.1.3",
    "jest": "^29.7.0",
    "jest-preset-angular": "^13.1.0",
    "ngx-build-plus": "^17.0.0",
    "prettier": "3.2.5",
    "source-map-explorer": "^2.5.3",
    "typescript": "~5.8.0"
  },
  "browserslist": {
    "production": [
      ">0.5%",
      "not dead",
      "not op_mini all",
      "not ie 11"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "engines": {
    "node": ">=20.0.0",
    "npm": ">=8.0.0"
  }
}

// === ARCHIVO: angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "financial-portal": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "standalone": true,
          "style": "scss",
          "changeDetection": "OnPush"
        },
        "@schematics/angular:application": {
          "strict": true,
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/financial-portal",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles/_critical.scss"
            ],
            "stylePreprocessorOptions": {
              "includePaths": [
                "src/styles"
              ]
            },
            "scripts": [],
            "inlineCriticalCss": true,
            "optimization": {
              "scripts": true,
              "styles": true,
              "fonts": true
            },
            "outputHashing": "all",
            "namedChunks": false,
            "vendorChunk": false,
            "extractLicenses": true,
            "buildOptimizer": true,
            "sourceMap": false,
            "preserveSymlinks": false,
            "esbuild": {
              "minify": true,
              "target": "es2022"
            }
          },
          "configurations": {
            "development": {
              "optimization": false,
              "sourceMap": true,
              "namedChunks": true,
              "vendorChunk": true,
              "buildOptimizer": false,
              "extractLicenses": false
            },
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all",
              "namedChunks": false,
              "vendorChunk": false,
              "extractLicenses": true,
              "buildOptimizer": true,
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "esbuild": {
                "minify": true,
                "target": "es2022"
              }
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "financial-portal:build",
            "proxyConfig": "proxy.conf.json"
          },
          "configurations": {
            "production": {
              "browserTarget": "financial-portal:build:production"
            },
            "development": {
              "browserTarget": "financial-portal:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "financial-portal:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": [
              "src/**/*.ts",
              "src/**/*.html"
            ]
          }
        },
        "server": {
          "builder": "@angular-devkit/build-angular:server",
          "options": {
            "outputPath": "dist/financial-portal/server",
            "main": "server.ts",
            "tsConfig": "tsconfig.server.json"
          },
          "configurations": {
            "production": {
              "outputHashing": "media",
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ]
            }
          }
        },
        "prerender": {
          "builder": "@nguniversal/builders:prerender",
          "options": {
            "routesFile": "routes.txt"
          },
          "configurations": {
            "production": {}
          }
        }
      }
    }
  },
  "cli": {
    "analytics": false,
    "schematicCollections": [
      "@schematics/angular",
      "@angular-eslint/schematics"
    ]
  },
  "schematics": {
    "@schematics/angular:component": {
      "prefix": "app",
      "style": "scss",
      "standalone": true,
      "changeDetection": "OnPush"
    }
  }
}


// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": false,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom",
      "dom.iterable"
    ],
    "paths": {
      "@app/*": ["src/app/*"],
      "@styles/*": ["src/styles/*"],
      "@assets/*": ["src/assets/*"],
      "@environments/*": ["src/environments/*"]
    }
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true,
    "allowEmptyCodegenFiles": false
  },
  "exclude": [
    "node_modules",
    "**/*.spec.ts",
    "**/*.stories.ts"
  ]
}

// === ARCHIVO: src/app/core/services/performance.service.ts ===
import { Injectable, signal, effect, Signal, EnvironmentInjector, inject } from '@angular/core';
import { Metric, ReportOptions } from '../models/performance.model';
import { webVitals } from '../utils/web-vitals-wrapper';
import { environment } from '@environments/environment';

/**
 * Servicio central para la medición y reporte de métricas de rendimiento.
 * Implementa la recolección de Core Web Vitals y métricas personalizadas.
 * Utiliza Angular Signals para notificación reactiva de cambios en métricas.
 */
@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private readonly environmentInjector = inject(EnvironmentInjector);
  
  private readonly lcp = signal<Metric | null>(null);
  private readonly fid = signal<Metric | null>(null);
  private readonly cls = signal<Metric | null>(null);
  private readonly ttfb = signal<Metric | null>(null);
  private readonly fcp = signal<Metric | null>(null);

  public readonly metrics: Signal<Record<string, Metric | null>> = signal({
    lcp: this.lcp(),
    fid: this.fid(),
    cls: this.cls(),
    ttfb: this.ttfb(),
    fcp: this.fcp()
  });

  private isCollecting = false;

  constructor() {
    effect(() => {
      this.metrics.set({
        lcp: this.lcp(),
        fid: this.fid(),
        cls: this.cls(),
        ttfb: this.ttfb(),
        fcp: this.fcp()
      });
    });
  }

  public startCollecting(): void {
    if (this.isCollecting) return;
    this.isCollecting = true;

    webVitals.getLCP((metric) => {
      this.lcp.set({
        name: 'LCP',
        value: metric.value,
        rating: metric.value <= 2500 ? 'good' : metric.value <= 4000 ? 'needs-improvement' : 'poor',
        delta: metric.delta,
        entries: metric.entries
      });
    }, { reportAllChanges: true });

    webVitals.getFID((metric) => {
      this.fid.set({
        name: 'FID',
        value: metric.value,
        rating: metric.value <= 100 ? 'good' : metric.value <= 300 ? 'needs-improvement' : 'poor',
        delta: metric.delta,
        entries: metric.entries
      });
    });

    webVitals.getCLS((metric) => {
      this.cls.set({
        name: 'CLS',
        value: metric.value,
        rating: metric.value <= 0.1 ? 'good' : metric.value <= 0.25 ? 'needs-improvement' : 'poor',
        delta: metric.delta,
        entries: metric.entries
      });
    });

    webVitals.getTTFB((metric) => {
      this.ttfb.set({
        name: 'TTFB',
        value: metric.value,
        rating: metric.value <= 800 ? 'good' : metric.value <= 1800 ? 'needs-improvement' : 'poor',
        delta: metric.delta,
        entries: metric.entries
      });
    });

    webVitals.getFCP((metric) => {
      this.fcp.set({
        name: 'FCP',
        value: metric.value,
        rating: metric.value <= 1800 ? 'good' : metric.value <= 3000 ? 'needs-improvement' : 'poor',
        delta: metric.delta,
        entries: metric.entries
      });
    });
  }

  public stopCollecting(): void {
    if (!this.isCollecting) return;
    webVitals.reset();
    this.isCollecting = false;
  }

  public async generateReport(options: ReportOptions = {}): Promise<PerformanceReport> {
    const defaultOptions: ReportOptions = {
      includeEntries: false,
      threshold: 'strict',
      ...options
    };

    const currentMetrics = this.metrics();
    const report: PerformanceReport = {
      timestamp: new Date().toISOString(),
      environment: environment.environmentName,
      metrics: {},
      summary: {
        score: 0,
        passed: 0,
        failed: 0,
        total: 0
      }
    };

    const thresholds = {
      lcp: defaultOptions.threshold === 'strict' ? 2500 : 4000,
      fid: defaultOptions.threshold === 'strict' ? 100 : 300,
      cls: defaultOptions.threshold === 'strict' ? 0.1 : 0.25,
      ttfb: defaultOptions.threshold === 'strict' ? 800 : 1800,
      fcp: defaultOptions.threshold === 'strict' ? 1800 : 3000
    };

    let score = 0;
    let passed = 0;
    let total = 0;

    for (const [key, metric] of Object.entries(currentMetrics)) {
      if (metric) {
        report.metrics[key] = {
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          isPassed: metric.value <= thresholds[key as keyof typeof thresholds],
          ...(defaultOptions.includeEntries ? { entries: metric.entries } : {})
        };

        total++;
        if (report.metrics[key].isPassed) {
          passed++;
          score += 1;
        }
      }
    }

    report.summary = {
      score: total > 0 ? Math.round((score / total) * 100) : 0,
      passed,
      failed: total - passed,
      total
    };

    if (environment.analyticsEnabled) {
      await this.sendToAnalytics(report);
    }

    return report;
  }

  private async sendToAnalytics(report: PerformanceReport): Promise<void> {
    try {
      console.log('[PerformanceService] Enviando reporte a analytics:', report);
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error('[PerformanceService] Error al enviar reporte a analytics:', error);
    }
  }

  public getMetricsAsObservable() {
    return new PerformanceObservable<Record<string, Metric | null>>(subscriber => {
      subscriber.next(this.metrics());
      const subscription = effect(() => {
        subscriber.next(this.metrics());
      });
      return () => subscription.destroy();
    });
  }

  public getMetricValue(metricName: string): number | null {
    const currentMetrics = this.metrics();
    const metric = currentMetrics[metricName];
    return metric ? metric.value : null;
  }

  public getMetricRating(metricName: string): 'good' | 'needs-improvement' | 'poor' | null {
    const currentMetrics = this.metrics();
    const metric = currentMetrics[metricName];
    return metric ? metric.rating : null;
  }

  public isCollectingMetrics(): boolean {
    return this.isCollecting;
  }
}

export interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: PerformanceEntry[];
}

export interface ReportOptions {
  includeEntries?: boolean;
  threshold?: 'strict' | 'lenient';
}

export interface PerformanceReport {
  timestamp: string;
  environment: string;
  metrics: {
    [key: string]: {
      name: string;
      value: number;
      rating: 'good' | 'needs-improvement' | 'poor';
      isPassed: boolean;
      entries?: PerformanceEntry[];
    };
  };
  summary: {
    score: number;
    passed: number;
    failed: number;
    total: number;
  };
}

class PerformanceObservable<T> {
  constructor(private subscribeFn: (subscriber: PerformanceSubscriber<T>) => () => void) {}

  subscribe(observer: Partial<PerformanceObserver<T>>): PerformanceSubscription {
    const subscriber = new PerformanceSubscriber(observer);
    const unsubscribe = this.subscribeFn(subscriber);
    return { unsubscribe };
  }
}

class PerformanceSubscriber<T> {
  constructor(private observer: Partial<PerformanceObserver<T>>) {}

  next(value: T): void {
    if (this.observer.next) this.observer.next(value);
  }
}

interface PerformanceObserver<T> {
  next: (value: T) => void;
  error?: (err: any) => void;
  complete?: () => void;
}

interface PerformanceSubscription {
  unsubscribe: () => void;
}

// === ARCHIVO: src/main.ts ===
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { PerformanceService, Metric } from './app/core/services/performance.service';
import { APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

class GlobalErrorHandler implements ErrorHandler {
  private readonly performanceService: PerformanceService;
  private readonly router: Router;

  constructor(performanceService: PerformanceService, router: Router) {
    this.performanceService = performanceService;
    this.router = router;
  }

  handleError(error: Error): void {
    const navigation = this.router.getCurrentNavigation();
    const errorContext = navigation?.extras?.state?.['errorContext'] || 'unknown';
    
    console.error('[GlobalErrorHandler] Error capturado:', {
      message: error.message,
      stack: error.stack,
      context: errorContext,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });

    const metric: Metric = {
      name: 'js_error',
      value: 1,
      rating: 'poor',
      delta: 1,
      id: `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      entries: []
    };

    if (this.performanceService && typeof this.performanceService['logError'] === 'function') {
      this.performanceService['logError'](error, errorContext);
    }

    throw error;
  }
}

function initializePerformanceMonitoring(performanceService: PerformanceService): () => void {
  return () => {
    const performanceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const metric: Metric = {
          name: entry.entryType,
          value: entry.startTime,
          rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs-improvement' : 'poor',
          delta: entry.startTime,
          id: `${entry.entryType}_${Date.now()}`,
          entries: [entry]
        };
        
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('[Performance] LCP detectado:', metric.value);
        } else if (entry.entryType === 'first-input') {
          console.log('[Performance] FID detectado:', metric.value);
        } else if (entry.entryType === 'layout-shift') {
          console.log('[Performance] CLS detectado:', metric.value);
        }
      }
    });

    try {
      performanceObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
    } catch (e) {
      console.warn('[Performance] Algunos observadores no están disponibles en este navegador');
    }

    performanceService.startCollecting();

    return () => {
      performanceObserver.disconnect();
      performanceService.stopCollecting();
    };
  };
}

function trackRouteChanges(router: Router, performanceService: PerformanceService): void {
  router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigationTiming) {
      const ttfb = navigationTiming.responseStart - navigationTiming.requestStart;
      const loadComplete = navigationTiming.loadEventEnd - navigationTiming.fetchStart;
      
      console.log('[Router] Navegación completada:', {
        url: event.urlAfterRedirects,
        ttfb: `${ttfb.toFixed(2)}ms`,
        loadComplete: `${loadComplete.toFixed(2)}ms`,
        type: 'NavigationEnd'
      });
    }

    if (typeof (performanceService as any).onRouteChange === 'function') {
      (performanceService as any).onRouteChange(event.urlAfterRedirects);
    }
  });
}

function getNavigationType(): string {
  const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navEntry) {
    const types: Record<number, string> = {
      0: 'navigate',
      1: 'reload',
      2: 'back_forward',
      255: 'prerender'
    };
    return types[navEntry.type] || 'unknown';
  }
  return 'unknown';
}

function initializeApp(performanceService: PerformanceService, router: Router): Promise<void> {
  return new Promise((resolve) => {
    const startTime = performance.now();
    const navType = getNavigationType();
    
    console.log('[Bootstrap] Iniciando aplicación Financial Portal...');
    console.log('[Bootstrap] Tipo de navegación:', navType);
    console.log('[Bootstrap] User Agent:', navigator.userAgent.substring(0, 50) + '...');

    trackRouteChanges(router, performanceService);

    const initializationCleanup = initializePerformanceMonitoring(performanceService);
    
    if (typeof (performanceService as any).setInitializationMetrics === 'function') {
      (performanceService as any).setInitializationMetrics({
        startTime,
        navType,
        timestamp: new Date().toISOString()
      });
    }

    resolve();

    window.addEventListener('beforeunload', () => {
      if (typeof initializationCleanup === 'function') {
        initializationCleanup();
      }
    });
  });
}

async function main(): Promise<void> {
  const container = document.getElementById('app');
  
  if (!container) {
    throw new Error('[Bootstrap] No se encontró el elemento #app en el DOM. Verifica que index.html contenga <app-root></app-root>');
  }

  console.log('[Bootstrap] Punto de entrada de Financial Portal');
  console.log('[Bootstrap] Versión: 0.0.1');
  console.log('[Bootstrap] Timestamp:', new Date().toISOString());

  try {
    await bootstrapApplication(AppComponent, appConfig)
      .then(appRef => {
        const performanceService = appRef.injector.get(PerformanceService);
        const router = appRef.injector.get(Router);
        
        return initializeApp(performanceService, router).then(() => appRef);
      })
      .then(appRef => {
        console.log('[Bootstrap] Aplicación bootstrap completada exitosamente');
        console.log('[Bootstrap] Componentes inicializados');
        
        const coreVersion = performance.getEntriesByType('resource')
          .filter(r => r.name.includes('main.js'))
          .map(r => ({ name: r.name, duration: r.duration }));
        
        if (coreVersion.length > 0) {
          console.log('[Bootstrap] Bundle principal cargado en:', coreVersion[0].duration.toFixed(2) + 'ms');
        }
        
        return appRef;
      });
  } catch (error) {
    console.error('[Bootstrap] Error crítico durante el bootstrap de la aplicación:', error);
    
    const errorContainer = document.createElement('div');
    errorContainer.style.cssText = 'padding: 40px; text-align: center; font-family: system-ui; background: #fff3f3; min-height: 100vh;';
    errorContainer.innerHTML = `
      <h1 style="color: #d32f2f; margin-bottom: 16px;">Error de Inicialización</h1>
      <p style="color: #666; margin-bottom: 24px;">La aplicación no pudo iniciarse correctamente.</p>
      <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; overflow: auto; text-align: left;">${error instanceof Error ? error.message : 'Error desconocido'}</pre>
      <button onclick="window.location.reload()" style="margin-top: 24px; padding: 12px 24px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px;">Reintentar</button>
    `;
    
    container.innerHTML = '';
    container.appendChild(errorContainer);
    
    throw error;
  }
}

main().catch(err => {
  console.error('[Bootstrap] Error no manejado en main():', err);
});

// === ARCHIVO: src/index.html ===
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Financial Portal - Portal Transaccional</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Portal transaccional de la institución financiera - Gestión de cuentas, transferencias y pagos">
  <meta name="theme-color" content="#1976d2">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Material+Icons" rel="stylesheet">
  
  <link rel="preload" href="styles.css" as="style">
  <link rel="preload" href="main.js" as="script">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html, body {
      height: 100%;
      font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    #app {
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .app-loading {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
      z-index: 9999;
    }
    
    .app-loading .spinner {
      width: 48px;
      height: 48px;
      border: 4px solid #e0e0e0;
      border-top-color: #1976d2;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    .app-loading .message {
      margin-top: 16px;
      color: #666;
      font-size: 14px;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    @media (prefers-reduced-motion: reduce) {
      .app-loading .spinner {
        animation: none;
        border-top-color: #1976d2;
      }
    }
  </style>
  
  <script>
    (function() {
      var initialColor = document.documentElement.style.getPropertyValue('--initial-bg');
      if (!initialColor) {
        document.documentElement.style.setProperty('--initial-bg', '#f5f7fa');
      }
    })();
  </script>
</head>
<body>
  <app-root>
    <div class="app-loading">
      <div class="spinner"></div>
      <div class="message">Cargando Financial Portal...</div>
    </div>
  </app-root>
  
  <noscript>
    <div style="padding: 40px; text-align: center; font-family: system-ui; background: #fff3f3; min-height: 100vh;">
      <h1 style="color: #d32f2f;">JavaScript Requerido</h1>
      <p style="margin-top: 16px; color: #666;">Esta aplicación requiere JavaScript para funcionar. Por favor, habilite JavaScript en su navegador.</p>
    </div>
  </noscript>
  
  <script>
    if ('serviceWorker' in navigator && location.protocol === 'https:') {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/ngsw-worker.js').then(function(registration) {
          console.log('SW registrado:', registration.scope);
        }).catch(function(error) {
          console.log('SW no registrado:', error);
        });
      });
    }
  </script>
</body>
</html>

// === ARCHIVO: src/app/app.component.ts ===
import { Component, OnInit, Signal, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PerformanceService, PerformanceReport } from './core/services/performance.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly performanceService: PerformanceService;
  
  readonly isSidenavOpen: Signal<boolean> = signal(true);
  readonly isLoading: Signal<boolean> = signal(false);
  readonly currentRoute: Signal<string> = signal('/dashboard');
  
  readonly performanceMetrics: Signal<PerformanceReport | null> = signal(null);
  readonly isPerformanceCollecting: Signal<boolean> = signal(false);
  
  readonly navItems: NavItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Transacciones', route: '/transactions', icon: 'receipt_long' },
    { label: 'Reportes', route: '/reports', icon: 'assessment' },
    { label: 'Configuración', route: '/settings', icon: 'settings' },
  ];
  
  readonly appTitle: string = 'Financial Portal';
  readonly appVersion: string = '1.0.0';
  
  readonly sidenavMode: Signal<'side' | 'over'> = computed(() => {
    return window.innerWidth > 768 ? 'side' : 'over';
  });

  constructor(performanceService: PerformanceService) {
    this.performanceService = performanceService;
  }

  ngOnInit(): void {
    this.performanceService.startCollecting();
    this.isPerformanceCollecting.set(true);
    
    this.performanceService.getMetricsAsObservable().subscribe({
      next: (metrics: PerformanceReport) => {
        this.performanceMetrics.set(metrics);
      },
      error: (err: Error) => {
        console.error('Error collecting performance metrics:', err);
      },
    });
  }

  toggleSidenav(): void {
    this.isSidenavOpen.update((open: boolean) => !open);
  }

  closeSidenavOnMobile(): void {
    if (window.innerWidth <= 768) {
      this.isSidenavOpen.set(false);
    }
  }

  navigateTo(route: string): void {
    this.currentRoute.set(route);
    this.closeSidenavOnMobile();
  }

  async generatePerformanceReport(): Promise<void> {
    this.isLoading.set(true);
    try {
      const report: PerformanceReport = await this.performanceService.generateReport({
        includeMetrics: true,
        includeSuggestions: true,
        url: window.location.href,
      });
      this.performanceMetrics.set(report);
      console.log('Performance report generated:', report);
    } catch (error) {
      console.error('Failed to generate performance report:', error);
    } finally {
      this.isLoading.set(false);
    }
  }

  stopPerformanceCollection(): void {
    this.performanceService.stopCollecting();
    this.isPerformanceCollecting.set(false);
  }

  startPerformanceCollection(): void {
    this.performanceService.startCollecting();
    this.isPerformanceCollecting.set(true);
  }
}

// === ARCHIVO: src/app/app.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection, isDevMode, APP_INITIALIZER } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouterTransition } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { PerformanceService } from './core/services/performance.service';
import { environment } from '../environments/environment';

function initializeApp(performanceService: PerformanceService): () => void {
  return () => {
    if (!isDevMode()) {
      performanceService.startCollecting();
    }
    console.log(`[${new Date().toISOString()}] Financial Portal initialized in ${environment.production ? 'production' : 'development'} mode`);
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
      withViewTransitions({
        skipInitialTransition: true,
      })
    ),
    
    provideHttpClient(
      withFetch(),
      withInterceptors([
        authInterceptor,
        errorInterceptor,
      ])
    ),
    
    provideAnimationsAsync(),
    
    provideRouterTransition(),
    
    PerformanceService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [PerformanceService],
      multi: true,
    },
    
    {
      provide: HTTP_INTERCEPTORS,
      useValue: authInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useValue: errorInterceptor,
      multi: true,
    },
    
    {
      provide: 'PERFORMANCE_CONFIG',
      useValue: {
        enableWebVitals: !isDevMode(),
        reportingEndpoint: environment.analyticsEndpoint,
        sampleRate: environment.production ? 1.0 : 0.1,
      },
    },
    {
      provide: 'CACHE_CONFIG',
      useValue: {
        maxSize: 100,
        maxAge: 300000,
        cacheStrategy: 'lru',
      },
    },
  ],
};

// === ARCHIVO: src/app/app.routes.ts ===
import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { PerformanceService } from './core/services/performance.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    title: 'Dashboard | Financial Portal',
    providers: [
      {
        provide: PerformanceService,
        useFactory: (): PerformanceService => {
          const service = new PerformanceService();
          return service;
        },
      },
    ],
  },
  {
    path: 'transactions',
    loadChildren: () =>
      import('./features/transactions/transactions.routes').then(
        (m) => m.TRANSACTIONS_ROUTES
      ),
    title: 'Transacciones | Financial Portal',
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./features/reports/reports.routes').then((m) => m.REPORTS_ROUTES),
    title: 'Reportes | Financial Portal',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    title: '404 - Página no encontrada | Financial Portal',
  },
];

routes.forEach((route: Routes[number]): void => {
  if (route.loadComponent) {
    const originalLoadComponent = route.loadComponent;
    route.loadComponent = async () => {
      const startTime: number = performance.now();
      const component = await originalLoadComponent();
      const loadTime: number = performance.now() - startTime;
      console.log(`[Route] ${route.path} loaded in ${loadTime.toFixed(2)}ms`);
      return component;
    };
  }
});

// === ARCHIVO: src/app/features/dashboard/dashboard.component.ts ===
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, signal, computed, effect, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PerformanceService } from '@app/core/services/performance.service';
import { TransactionCardComponent } from '@app/shared/components/transaction-card/transaction-card.component';

interface DashboardMetrics {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsRate: number;
}

interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  status: 'completed' | 'pending' | 'failed';
}

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, TransactionCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly performanceService = inject(PerformanceService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly isLoading = signal(true);
  readonly hasError = signal(false);
  readonly errorMessage = signal('');

  readonly metrics = signal<DashboardMetrics>({
    totalBalance: 0,
    monthlyIncome: 0,
    monthlyExpenses: 0,
    savingsRate: 0
  });

  readonly transactions = signal<Transaction[]>([]);
  readonly recentTransactions = computed(() => 
    this.transactions().slice(0, 5)
  );

  readonly quickActions: QuickAction[] = [
    { id: 'transfer', label: 'Transferir', icon: 'send', route: '/transfer' },
    { id: 'pay', label: 'Pagar servicios', icon: 'payment', route: '/payments' },
    { id: 'recharge', label: 'Recargar', icon: 'add_card', route: '/recharge' },
    { id: 'invest', label: 'Invertir', icon: 'trending_up', route: '/invest' }
  ];

  readonly isMobile = signal(window.innerWidth < 768);
  readonly sidebarCollapsed = signal(false);

  private readonly metricsEffect = effect(() => {
    const currentMetrics = this.metrics();
    if (currentMetrics.totalBalance > 0) {
      this.performanceService.generateReport({
        url: window.location.href,
        reportType: 'performance'
      }).catch(() => {});
    }
  });

  ngOnInit(): void {
    this.initializePerformanceMonitoring();
    this.loadDashboardData();
    this.setupResponsiveListener();
  }

  ngOnDestroy(): void {
    this.performanceService.stopCollecting();
  }

  private initializePerformanceMonitoring(): void {
    this.performanceService.startCollecting();
    this.performanceService.getMetricsAsObservable()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (metric) => {
          console.debug('[Dashboard] Métrica de rendimiento:', metric.name, metric.value);
        },
        error: (err) => {
          console.warn('[Dashboard] Error al收集ar métricas:', err);
        }
      });
  }

  private loadDashboardData(): void {
    this.isLoading.set(true);

    setTimeout(() => {
      this.metrics.set({
        totalBalance: 45892.50,
        monthlyIncome: 12500.00,
        monthlyExpenses: 8750.00,
        savingsRate: 30
      });

      this.transactions.set([
        {
          id: 'txn-001',
          date: new Date('2024-01-15'),
          description: 'Salario mensual',
          amount: 12500.00,
          category: 'income',
          type: 'income',
          status: 'completed'
        },
        {
          id: 'txn-002',
          date: new Date('2024-01-14'),
          description: 'Pago servicios luz',
          amount: -245.50,
          category: 'utilities',
          type: 'expense',
          status: 'completed'
        },
        {
          id: 'txn-003',
          date: new Date('2024-01-13'),
          description: 'Supermercado',
          amount: -1250.00,
          category: 'groceries',
          type: 'expense',
          status: 'completed'
        },
        {
          id: 'txn-004',
          date: new Date('2024-01-12'),
          description: 'Transferencia recibida',
          amount: 3000.00,
          category: 'transfer',
          type: 'income',
          status: 'completed'
        },
        {
          id: 'txn-005',
          date: new Date('2024-01-11'),
          description: 'Netflix suscripción',
          amount: -15.99,
          category: 'entertainment',
          type: 'expense',
          status: 'completed'
        }
      ]);

      this.isLoading.set(false);
      this.cdr.markForCheck();
    }, 300);
  }

  private setupResponsiveListener(): void {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      const handler = (e: MediaQueryListEvent) => this.isMobile.set(e.matches);
      mediaQuery.addEventListener('change', handler);
    }
  }

  toggleSidebar(): void {
    this.sidebarCollapsed.update(v => !v);
    this.cdr.markForCheck();
  }

  onQuickAction(action: QuickAction): void {
    console.log(`[Dashboard] Acción rápida seleccionada: ${action.id}`);
  }

  onTransactionClick(transaction: Transaction): void {
    console.log(`[Dashboard] Transacción seleccionada: ${transaction.id}`);
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-CO', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  }

  trackByTransaction(index: number, transaction: Transaction): string {
    return transaction.id;
  }

  trackByQuickAction(index: number, action: QuickAction): string {
    return action.id;
  }
}

// === ARCHIVO: src/app/features/dashboard/dashboard.component.html ===
<div class="dashboard-container" [class.sidebar-collapsed]="sidebarCollapsed()">
  <aside class="sidebar" role="navigation" aria-label="Menú principal">
    <div class="sidebar-header">
      <img 
        src="assets/logo.svg" 
        alt="Logo Banco"
        width="120"
        height="40"
        fetchpriority="high"
        loading="eager">
    </div>
    
    <nav class="sidebar-nav">
      <ul class="nav-list">
        <li class="nav-item active">
          <a routerLink="/dashboard" aria-current="page">
            <span class="material-icon">dashboard</span>
            <span class="nav-label">Inicio</span>
          </a>
        </li>
        <li class="nav-item">
          <a routerLink="/accounts">
            <span class="material-icon">account_balance</span>
            <span class="nav-label">Cuentas</span>
          </a>
        </li>
        <li class="nav-item">
          <a routerLink="/cards">
            <span class="material-icon">credit_card</span>
            <span class="nav-label">Tarjetas</span>
          </a>
        </li>
        <li class="nav-item">
          <a routerLink="/loans">
            <span class="material-icon">request_quote</span>
            <span class="nav-label">Préstamos</span>
          </a>
        </li>
        <li class="nav-item">
          <a routerLink="/investments">
            <span class="material-icon">show_chart</span>
            <span class="nav-label">Inversiones</span>
          </a>
        </li>
      </ul>
    </nav>

    <button 
      class="sidebar-toggle"
      (click)="toggleSidebar()"
      [attr.aria-expanded]="!sidebarCollapsed()"
      aria-controls="sidebar"
      aria-label="Alternar menú lateral">
      <span class="material-icon">{{ sidebarCollapsed() ? 'chevron_right' : 'chevron_left' }}</span>
    </button>
  </aside>

  <main class="main-content" role="main">
    <header class="content-header">
      <h1 class="page-title">Resumen de tu cuenta</h1>
      <div class="user-info">
        <span class="user-name">Cliente Premium</span>
        <img 
          src="assets/avatar-placeholder.svg" 
          alt="Avatar del usuario"
          width="40"
          height="40"
          loading="lazy"
          class="user-avatar">
      </div>
    </header>

    @if (isLoading()) {
      <div class="loading-state" role="status" aria-live="polite">
        <div class="spinner" aria-hidden="true"></div>
        <p>Cargando información de tu cuenta...</p>
      </div>
    } @else if (hasError()) {
      <div class="error-state" role="alert">
        <span class="material-icon error-icon">error_outline</span>
        <p>{{ errorMessage() }}</p>
        <button class="retry-button" (click)="loadDashboardData()">
          Reintentar
        </button>
      </div>
    } @else {
      <section class="metrics-section" aria-labelledby="metrics-title">
        <h2 id="metrics-title" class="sr-only">Métricas financieras</h2>
        
        <article class="metric-card primary">
          <h3 class="metric-label">Saldo total disponible</h3>
          <p class="metric-value">{{ formatCurrency(metrics().totalBalance) }}</p>
          <span class="metric-trend positive">+2.3% este mes</span>
        </article>

        <article class="metric-card">
          <h3 class="metric-label">Ingresos del mes</h3>
          <p class="metric-value income">{{ formatCurrency(metrics().monthlyIncome) }}</p>
        </article>

        <article class="metric-card">
          <h3 class="metric-label">Gastos del mes</h3>
          <p class="metric-value expense">{{ formatCurrency(metrics().monthlyExpenses) }}</p>
        </article>

        <article class="metric-card">
          <h3 class="metric-label">Tasa de ahorro</h3>
          <p class="metric-value">{{ metrics().savingsRate }}%</p>
          <span class="metric-badge">Excelente</span>
        </article>
      </section>

      <section class="quick-actions-section" aria-labelledby="quick-actions-title">
        <h2 id="quick-actions-title">Acciones rápidas</h2>
        <div class="quick-actions-grid" role="group" aria-label="Acciones disponibles">
          @for (action of quickActions; track trackByQuickAction($index, action)) {
            <button 
              class="quick-action-button"
              (click)="onQuickAction(action)"
              [attr.aria-label]="action.label">
              <span class="material-icon action-icon">{{ action.icon }}</span>
              <span class="action-label">{{ action.label }}</span>
            </button>
          }
        </div>
      </section>

      <section class="transactions-section" aria-labelledby="transactions-title">
        <div class="section-header">
          <h2 id="transactions-title">Transacciones recientes</h2>
          <a routerLink="/transactions" class="view-all-link">Ver todas</a>
        </div>

        <div class="transactions-list" role="list">
          @for (transaction of recentTransactions(); track trackByTransaction($index, transaction)) {
            <app-transaction-card
              [transaction]="transaction"
              (transactionClick)="onTransactionClick($event)"
              role="listitem">
            </app-transaction-card>
          } @empty {
            <div class="empty-state">
              <span class="material-icon">receipt_long</span>
              <p>No hay transacciones recientes</p>
            </div>
          }
        </div>
      </section>
    }
  </main>
</div>

// === ARCHIVO: src/app/features/dashboard/dashboard.component.scss ===
@use 'sass:math';

$sidebar-width: 280px;
$sidebar-collapsed-width: 72px;
$header-height: 64px;
$metric-card-min-width: 200px;
$breakpoint-mobile: 768px;
$transition-duration: 0.25s;
$transition-easing: cubic-bezier(0.4, 0, 0.2, 1);

:host {
  display: block;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.dashboard-container {
  display: flex;
  min-height: 100vh;
  background-color: rgb(248, 249, 250);
  transition: padding-left $transition-duration $transition-easing;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: $sidebar-width;
  height: 100vh;
  background: linear-gradient(180deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 100%);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: width $transition-duration $transition-easing;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.08);

  @media (max-width: $breakpoint-mobile) {
    transform: translateX(-100%);

    &.open {
      transform: translateX(0);
    }
  }

  .sidebar-collapsed & {
    width: $sidebar-collapsed-width;

    .nav-label,
    .sidebar-header img {
      opacity: 0;
      visibility: hidden;
    }
  }
}

.sidebar-header {
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  img {
    transition: opacity $transition-duration $transition-easing;
    content-visibility: auto;
  }
}

.sidebar-nav {
  flex: 1;
  padding: 16px 0;
  overflow-y: auto;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 4px 12px;

  a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    color: rgb(148, 163, 184);
    text-decoration: none;
    border-radius: 8px;
    transition: all $transition-duration $transition-easing;

    &:hover {
      background-color: rgba(255, 255, 255, 0.06);
      color: rgb(255, 255, 255);
    }

    &.active {
      background: linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(37, 99, 235) 100%);
      color: rgb(255, 255, 255);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
  }

  .material-icon {
    font-size: 20px;
    flex-shrink: 0;
  }

  .nav-label {
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    transition: opacity $transition-duration $transition-easing;
  }
}

.sidebar-toggle {
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: transform $transition-duration $transition-easing;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  .material-icon {
    font-size: 16px;
    color: rgb(71, 85, 105);
  }
}

.main-content {
  flex: 1;
  margin-left: $sidebar-width;
  padding: 24px;
  overflow-y: auto;
  transition: margin-left $transition-duration $transition-easing;

  .sidebar-collapsed & {
    margin-left: $sidebar-collapsed-width;
  }

  @media (max-width: $breakpoint-mobile) {
    margin-left: 0;
    padding: 16px;
  }
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(226, 232, 240);
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: rgb(15, 23, 42);
  margin: 0;
  line-height: 1.2;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: rgb(71, 85, 105);
}

.user-avatar {
  border-radius: 50%;
  object-fit: cover;
  background-color: rgb(226, 232, 240);
}

.loading-state,
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;

  p {
    color: rgb(71, 85, 105);
    margin-top: 16px;
  }
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgb(226, 232, 240);
  border-top-color: rgb(59, 130, 246);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-state {
  .error-icon {
    font-size: 48px;
    color: rgb(239, 68, 68);
  }

  .retry-button {
    margin-top: 16px;
    padding: 10px 24px;
    background: rgb(59, 130, 246);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color $transition-duration;

    &:hover {
      background: rgb(37, 99, 235);
    }
  }
}

.metrics-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($metric-card-min-width, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.metric-card {
  background: rgb(255, 255, 255);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: transform $transition-duration $transition-easing, box-shadow $transition-duration $transition-easing;
  will-change: transform;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  &.primary {
    background: linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(37, 99, 235) 100%);
    color: white;

    .metric-label {
      color: rgba(255, 255, 255, 0.8);
    }

    .metric-value {
      color: white;
    }

    .metric-trend {
      color: rgba(255, 255, 255, 0.9);
    }
  }
}

.metric-label {
  font-size: 13px;
  font-weight: 500;
  color: rgb(100, 116, 139);
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.metric-value {
  font-size: 28px;
  font-weight: 700;
  color: rgb(15, 23, 42);
  margin: 0;
  line-height: 1.2;

  &.income {
    color: rgb(22, 163, 74);
  }

  &.expense {
    color: rgb(239, 68, 68);
  }
}

.metric-trend {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 500;
  color: rgb(22, 163, 74);

  &.positive {
    color: rgb(22, 163, 74);
  }

  &.negative {
    color: rgb(239, 68, 68);
  }
}

.metric-badge {
  display: inline-block;
  margin-top: 8px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  color: rgb(22, 163, 74);
  background-color: rgba(22, 163, 74, 0.1);
  border-radius: 12px;
}

.quick-actions-section {
  margin-bottom: 32px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: rgb(15, 23, 42);
    margin: 0 0 16px;
  }
}

.quick-actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
}

.quick-action-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 16px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(226, 232, 240);
  border-radius: 12px;
  cursor: pointer;
  transition: all $transition-duration $transition-easing;
  will-change: transform, background-color;

  &:hover {
    background: rgb(248, 250, 252);
    border-color: rgb(59, 130, 246);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  .action-icon {
    font-size: 28px;
    color: rgb(59, 130, 246);
  }

  .action-label {
    font-size: 13px;
    font-weight: 500;
    color: rgb(71, 85, 105);
    text-align: center;
  }
}

.transactions-section {
  background: rgb(255, 255, 255);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: rgb(15, 23, 42);
    margin: 0;
  }
}

.view-all-link {
  font-size: 14px;
  font-weight: 500;
  color: rgb(59, 130, 246);
  text-decoration: none;
  transition: color $transition-duration;

  &:hover {
    color: rgb(37, 99, 235);
    text-decoration: underline;
  }
}

.transactions-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  color: rgb(148, 163, 184);

  .material-icon {
    font-size: 48px;
    margin-bottom: 12px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.material-icon {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}

// === ARCHIVO: src/app/shared/components/transaction-card/transaction-card.component.ts ===
import { Component, Input, ChangeDetectionStrategy, Signal, computed, effect, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  currency: string;
  type: 'credit' | 'debit';
  category: string;
  description: string;
  status: 'pending' | 'completed' | 'failed';
  merchantName?: string;
  merchantLogo?: string;
}

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    CurrencyPipe,
    DatePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent {
  @Input({ required: true }) transaction!: Transaction;
  @Input() compactMode = false;
  @Input() showDetails = true;

  private readonly amount = computed(() => this.transaction?.amount ?? 0);
  private readonly type = computed(() => this.transaction?.type ?? 'debit');
  private readonly status = computed(() => this.transaction?.status ?? 'pending');

  readonly isCredit: Signal<boolean> = computed(() => this.type() === 'credit');
  readonly isPending: Signal<boolean> = computed(() => this.status() === 'pending');
  readonly isFailed: Signal<boolean> = computed(() => this.status() === 'failed');
  readonly displayAmount: Signal<string> = computed(() => {
    const absAmount = Math.abs(this.amount());
    const prefix = this.isCredit() ? '+' : '-';
    return `${prefix}$${absAmount.toFixed(2)}`;
  });
  readonly amountClass: Signal<string> = computed(() => 
    this.isCredit() ? 'amount-positive' : 'amount-negative'
  );
  readonly formattedDate: Signal<string> = computed(() => {
    if (!this.transaction?.date) return '';
    return new Date(this.transaction.date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  });
  readonly categoryIcon: Signal<string> = computed(() => {
    const categoryIcons: Record<string, string> = {
      'shopping': 'shopping_cart',
      'food': 'restaurant',
      'transport': 'directions_car',
      'entertainment': 'movie',
      'utilities': 'receipt',
      'transfer': 'swap_horiz',
      'salary': 'payments',
      'other': 'attach_money'
    };
    return categoryIcons[this.transaction?.category?.toLowerCase()] || 'attach_money';
  });

  constructor() {
    effect(() => {
      const txn = this.transaction;
      if (txn) {
        console.debug(`[TransactionCard] Render for txn ${txn.id}, type: ${this.type()}`);
      }
    });
  }

  onCardClick(event: MouseEvent): void {
    event.preventDefault();
    console.debug(`[TransactionCard] Clicked transaction: ${this.transaction?.id}`);
  }

  trackByFn = (index: number, item: Transaction): string => item.id;
}

// === ARCHIVO: src/app/shared/components/transaction-card/transaction-card.component.html ===
@if (transaction) {
  <mat-card 
    class="transaction-card" 
    [class.compact]="compactMode"
    [class.pending]="isPending()"
    [class.failed]="isFailed()"
    (click)="onCardClick($event)"
    role="article"
    [attr.aria-label]="'Transacción ' + transaction.type + ' de ' + displayAmount()">
    
    <div class="transaction-header">
      <div class="transaction-icon" [attr.aria-hidden]="true">
        <mat-icon>{{ categoryIcon() }}</mat-icon>
      </div>
      
      <div class="transaction-info">
        <h3 class="transaction-merchant">
          {{ transaction.merchantName || transaction.category }}
        </h3>
        <span class="transaction-description">{{ transaction.description }}</span>
      </div>
      
      <div class="transaction-amount" [ngClass]="amountClass()">
        <span class="amount-value">{{ displayAmount() }}</span>
        @if (transaction.currency && transaction.currency !== 'USD') {
          <span class="amount-currency">{{ transaction.currency }}</span>
        }
      </div>
    </div>
    
    @if (showDetails && !compactMode) {
      <div class="transaction-details">
        <div class="detail-row">
          <span class="detail-label">Fecha</span>
          <span class="detail-value">{{ formattedDate() }}</span>
        </div>
        
        <div class="detail-row">
          <span class="detail-label">Estado</span>
          <span 
            class="detail-value status-badge" 
            [class.pending]="isPending()"
            [class.completed]="!isPending() && !isFailed()"
            [class.failed]="isFailed()">
            @if (isPending()) {
              <mat-icon class="status-icon">schedule</mat-icon>
              Pendiente
            } @else if (isFailed()) {
              <mat-icon class="status-icon">error_outline</mat-icon>
              Fallido
            } @else {
              <mat-icon class="status-icon">check_circle</mat-icon>
              Completado
            }
          </span>
        </div>
        
        @if (transaction.merchantLogo) {
          <div class="detail-row">
            <span class="detail-label">Comercio</span>
            <img 
              [src]="transaction.merchantLogo" 
              [alt]="'Logo de ' + transaction.merchantName"
              class="merchant-logo"
              loading="lazy"
              width="40"
              height="40"
              onerror="this.style.display='none'">
          </div>
        }
      </div>
    }
    
    <div class="transaction-actions" *ngIf="!compactMode">
      <button 
        mat-icon-button 
        matTooltip="Ver detalles"
        aria-label="Ver detalles de la transacción">
        <mat-icon>visibility</mat-icon>
      </button>
      
      <button 
        mat-icon-button 
        matTooltip="Descargar comprobante"
        aria-label="Descargar comprobante">
        <mat-icon>download</mat-icon>
      </button>
      
      @if (isPending()) {
        <button 
          mat-icon-button 
          matTooltip="Cancelar transacción"
          aria-label="Cancelar transacción">
          <mat-icon>cancel</mat-icon>
        </button>
      }
    </div>
  </mat-card>
}

// === ARCHIVO: src/styles/_critical.scss ===
// Estilos críticos para Above The Fold - optimizados para LCP
// Este archivo se carga de forma inline en el head para maximizar el First Contentful Paint

:root {
  --color-primary: #1a73e8;
  --color-primary-dark: #1557b0;
  --color-secondary: #5f6368;
  --color-success: #34a853;
  --color-error: #ea4335;
  --color-warning: #fbbc04;
  --color-background: #ffffff;
  --color-surface: #f8f9fa;
  --color-text-primary: #202124;
  --color-text-secondary: #5f6368;
  --color-border: #dadce0;
  --font-family-base: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.15);
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-family: var(--font-family-base);
  background-color: var(--color-background);
  color: var(--color-text-primary);
  line-height: 1.5;
  min-height: 100vh;
}

// Layout crítico para Above The Fold
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-sm) var(--spacing-md);
  box-shadow: var(--shadow-sm);
}

.app-header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: var(--spacing-md);
}

.app-header__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--color-primary);
  text-decoration: none;
}

.app-header__logo-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1rem;
}

.app-header__nav {
  display: flex;
  gap: var(--spacing-lg);
}

.app-header__nav-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  transition: color var(--transition-fast), background-color var(--transition-fast);
}

.app-header__nav-link:hover,
.app-header__nav-link.active {
  color: var(--color-primary);
  background-color: rgba(26, 115, 232, 0.08);
}

.app-main {
  flex: 1;
  padding: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

// Dashboard crítico para LCP
.dashboard {
  display: grid;
  gap: var(--spacing-lg);
}

.dashboard__hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
}

.dashboard__hero-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.dashboard__hero-subtitle {
  font-size: 1rem;
  opacity: 0.9;
}

.dashboard__balance {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.dashboard__balance-label {
  font-size: 0.875rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dashboard__balance-value {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -1px;
}

// Grid de métricas críticas
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.metric-card {
  background: var(--color-surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
}

.metric-card__label {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--spacing-xs);
}

.metric-card__value {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.metric-card__value.positive {
  color: var(--color-success);
}

.metric-card__value.negative {
  color: var(--color-error);
}

// Transacciones críticas
.transactions-section {
  margin-top: var(--spacing-lg);
}

.transactions-section__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.transactions-section__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

// Skeleton loading para percepción de velocidad
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-surface) 25%,
    #e8eaed 50%,
    var(--color-surface) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: var(--border-radius-sm);
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.skeleton-text {
  height: 1rem;
  margin-bottom: var(--spacing-sm);
}

.skeleton-text.short {
  width: 60%;
}

.skeleton-text.medium {
  width: 80%;
}

.skeleton-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

// Utility classes críticas
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Focus visible para accesibilidad
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

// Reducir animaciones para usuarios que lo prefieren
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

// Media queries para responsive
@media (max-width: 768px) {
  .app-header__nav {
    display: none;
  }
  
  .dashboard__hero {
    padding: var(--spacing-md);
  }
  
  .dashboard__balance-value {
    font-size: 2rem;
  }
  
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }
}

// === ARCHIVO: src/environments/environment.ts ===
import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appVersion: '0.0.1',
  features: {
    enableDebugTools: true,
    enableAnalytics: false,
    enablePerformanceMonitoring: true,
    enableDetailedLogging: true
  },
  performance: {
    enableLazyLoading: true,
    cacheEnabled: true,
    cacheMaxAge: 300000,
    prefetchEnabled: true,
    resourceHintsEnabled: true,
    virtualizationEnabled: true,
    imageOptimizationEnabled: false,
    cspEnabled: false
  },
  thresholds: {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    fcp: 1800,
    ttfb: 800,
    tti: 3800,
    tbt: 200
  },
  resources: {
    cdnUrl: '',
    apiTimeout: 10000,
    maxConcurrentRequests: 6,
    retryAttempts: 3,
    retryDelay: 1000
  },
  ui: {
    defaultLanguage: 'es',
    supportedLanguages: ['es', 'en', 'pt'],
    dateFormat: 'DD/MM/YYYY',
    currency: 'EUR',
    theme: 'light',
    animationsEnabled: true
  },
  security: {
    tokenRefreshInterval: 300000,
    sessionTimeout: 1800000,
    enableCsrfProtection: true,
    allowedOrigins: ['http://localhost:4200']
  },
  logging: {
    level: 'debug',
    enableConsole: true,
    enableRemote: false,
    remoteEndpoint: ''
  }
};

// === ARCHIVO: src/environments/environment.interface.ts ===
export interface Environment {
  production: boolean;
  apiUrl: string;
  appVersion: string;
  features: FeatureFlags;
  performance: PerformanceConfig;
  thresholds: PerformanceThresholds;
  resources: ResourceConfig;
  ui: UIConfig;
  security: SecurityConfig;
  logging: LoggingConfig;
}

export interface FeatureFlags {
  enableDebugTools: boolean;
  enableAnalytics: boolean;
  enablePerformanceMonitoring: boolean;
  enableDetailedLogging: boolean;
}

export interface PerformanceConfig {
  enableLazyLoading: boolean;
  cacheEnabled: boolean;
  cacheMaxAge: number;
  prefetchEnabled: boolean;
  resourceHintsEnabled: boolean;
  virtualizationEnabled: boolean;
  imageOptimizationEnabled: boolean;
  cspEnabled: boolean;
}

export interface PerformanceThresholds {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
  tti: number;
  tbt: number;
}

export interface ResourceConfig {
  cdnUrl: string;
  apiTimeout: number;
  maxConcurrentRequests: number;
  retryAttempts: number;
  retryDelay: number;
}

export interface UIConfig {
  defaultLanguage: string;
  supportedLanguages: string[];
  dateFormat: string;
  currency: string;
  theme: 'light' | 'dark';
  animationsEnabled: boolean;
}

export interface SecurityConfig {
  tokenRefreshInterval: number;
  sessionTimeout: number;
  enableCsrfProtection: boolean;
  allowedOrigins: string[];
}

export interface LoggingConfig {
  level: 'debug' | 'info' | 'warn' | 'error';
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint: string;
}

// === ARCHIVO: src/environments/environment.prod.ts ===
import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  apiUrl: 'https://api.financial-portal.com/api',
  appVersion: '0.0.1',
  features: {
    enableDebugTools: false,
    enableAnalytics: true,
    enablePerformanceMonitoring: true,
    enableDetailedLogging: false
  },
  performance: {
    enableLazyLoading: true,
    cacheEnabled: true,
    cacheMaxAge: 900000,
    prefetchEnabled: true,
    resourceHintsEnabled: true,
    virtualizationEnabled: true,
    imageOptimizationEnabled: true,
    cspEnabled: true
  },
  thresholds: {
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    fcp: 1800,
    ttfb: 800,
    tti: 3800,
    tbt: 200
  },
  resources: {
    cdnUrl: 'https://cdn.financial-portal.com',
    apiTimeout: 8000,
    maxConcurrentRequests: 6,
    retryAttempts: 3,
    retryDelay: 1000
  },
  ui: {
    defaultLanguage: 'es',
    supportedLanguages: ['es', 'en', 'pt'],
    dateFormat: 'DD/MM/YYYY',
    currency: 'EUR',
    theme: 'light',
    animationsEnabled: true
  },
  security: {
    tokenRefreshInterval: 300000,
    sessionTimeout: 1800000,
    enableCsrfProtection: true,
    allowedOrigins: ['https://financial-portal.com']
  },
  logging: {
    level: 'warn',
    enableConsole: false,
    enableRemote: true,
    remoteEndpoint: 'https://logs.financial-portal.com/api'
  }
};

// === ARCHIVO: README.md ===
# Financial Portal - Optimización de Rendimiento

Aplicación Angular para gestión de portafolios financieros con enfoque en optimización de rendimiento basada en Core Web Vitals.

## Requisitos Previos

- Node.js 20.x o superior
- npm 8.x o superior
- Angular CLI 20.2.0

## Instalación

```bash
npm install
```

## Ejecución del Proyecto

### Desarrollo

```bash
npm start
```

Accede a `http://localhost:4200`

### Producción

```bash
npm run build
```

Los archivos compilados se generan en `dist/financial-portal/`

## Auditorías de Rendimiento

### Lighthouse

Ejecuta una auditoría completa:

```bash
npx lighthouse http://localhost:4200/dashboard \
  --chrome-flags="--headless" \
  --preset=desktop \
  --view
```

### Web Vitals

Para medir Core Web Vitals en producción:

```bash
npm run audit
```

Este comando evalúa:
- **LCP** (Largest Contentful Paint): Objetivo < 2.5s
- **FID** (First Input Delay): Objetivo < 100ms
- **CLS** (Cumulative Layout Shift): Objetivo < 0.1

### Análisis de Bundle

Para identificar componentes que afectan el tamaño del bundle:

```bash
npm run build:stats
npm run analyze
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── core/              # Servicios singletons, guards, interceptors
│   │   ├── services/      # PerformanceService, ApiService, AuthService
│   │   └── models/        # Interfaces y tipos del dominio
│   ├── features/          # Componentes de página (lazy loaded)
│   │   └── dashboard/     # Dashboard principal
│   └── shared/            # Componentes reutilizables
│       └── components/    # TransactionCard, etc.
├── environments/          # Configuración por entorno
├── styles/                # Estilos globales y críticos
└── assets/                # Recursos estáticos
```

## Optimizaciones Implementadas

### Configuración de Build

- **Lazy Loading**: Las rutas se cargan bajo demanda
- **OnPush Change Detection**: Componentes optimizados
- **Standalone Components**: Reducción del tamaño de bundle
- **esbuild**: Minificación avanzada en producción
- **CSS Crítico**: Inyectado en el `<head>`

### Rendimiento en Ejecución

- **Angular Signals**: Estado reactivo eficiente
- **Virtualización**: Listas con muchos elementos
- **Cacheo de Recursos**: Configurable por entorno
- **Optimización de Imágenes**: srcset y lazy loading

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run build:stats` | Genera estadísticas del bundle |
| `npm run analyze` | Analiza el tamaño del bundle |
| `npm run test` | Ejecuta pruebas unitarias |
| `npm run lint` | Verifica el código |
| `npm run audit` | Ejecuta auditoría de Web Vitals |
| `npm run format` | Formatea el código con Prettier |

## Configuración de Entornos

Los archivos en `src/environments/` controlan:
- `environment.ts`: Desarrollo
- `environment.prod.ts`: Producción

Parámetros clave de rendimiento:
- `performance.cacheMaxAge`: TTL de caché en ms
- `performance.enableLazyLoading`: Carga diferida
- `performance.virtualizationEnabled`: Listas virtualizadas
- `thresholds`: Objetivos de Core Web Vitals

## Troubleshooting

### Build lento

```bash
npm run build -- --configuration=development
```

### Errores de TypeScript

```bash
npx tsc --noEmit
```

### Verificar dependencias

```bash
npm audit fix
```

## Recursos Adicionales

- [Documentación Angular](https://angular.io/docs)
- [Core Web Vitals](https://web.dev/vitals/)
- [Angular Performance](https://angular.io/guide/performance)

// === ARCHIVO: src/app/core/models/performance.model.ts ===
/**
 * Interfaces para el módulo de métricas de rendimiento.
 * Define los tipos de datos utilizados para representar métricas
 * de Core Web Vitals y opciones de reporte.
 */

/**
 * Representa una métrica de rendimiento individual recopilada
 * por el servicio de web vitals.
 */
export interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  entries: PerformanceEntry[];
}

/**
 * Opciones de configuración para la generación de reportes
 * de rendimiento.
 */
export interface ReportOptions {
  includeEntries?: boolean;
  threshold?: 'strict' | 'lenient';
}

/**
 * Estructura de una entrada de rendimiento del navegador.
 * Extiende la interfaz nativa de PerformanceEntry.
 */
export interface PerformanceMetricEntry extends PerformanceEntry {
  processingStart?: number;
  hadRecentInput?: boolean;
  value?: number;
  startTime?: number;
  duration?: number;
  size?: number;
  transferSize?: number;
  latency?: number;
  url?: string;
  initiatorType?: string;
  renderTime?: number;
  loadTime?: number;
  domContentLoaded?: number;
  firstInterim?: number;
  maxFID?: number;
  eventName?: string;
  taskAttribution?: string;
}

/**
 * Tipo de callback para funciones de medición de web vitals.
 */
export type MetricCallback = (metric: Metric) => void;

/**
 * Configuración adicional para la recolección de métricas.
 */
export interface MetricReportOptions {
  reportAllChanges?: boolean;
  durationThreshold?: number;
  metricThreshold?: number;
}

/**
 * Resultado de la evaluación de una métrica contra
 * un threshold específico.
 */
export interface MetricEvaluation {
  metricName: string;
  value: number;
  threshold: number;
  passed: boolean;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// === ARCHIVO: src/app/core/utils/web-vitals-wrapper.ts ===
/**
 * Wrapper para la librería web-vitals.
 * Proporciona una interfaz unificada para la recolección
 * de Core Web Vitals con soporte para reset y callbacks.
 */

import {
  getCLS as webVitalsGetCLS,
  getFCP as webVitalsGetFCP,
  getFID as webVitalsGetFID,
  getLCP as webVitalsGetLCP,
  getTTFB as webVitalsGetTTFB,
  onCLS as webVitalsOnCLS,
  onFCP as webVitalsOnFCP,
  onFID as webVitalsOnFID,
  onLCP as webVitalsOnLCP,
  onTTFB as webVitalsOnTTFB,
  Metric as WebVitalsMetric,
  ReportCallback,
  ReportOptions as WebVitalsReportOptions
} from 'web-vitals';

/**
 * Interfaz que define el contrato del wrapper de web-vitals.
 */
export interface WebVitalsInterface {
  getCLS: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  getFCP: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  getFID: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  getLCP: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  getTTFB: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  onCLS: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  onFCP: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  onFID: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  onLCP: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  onTTFB: (onReport: ReportCallback, options?: WebVitalsReportOptions) => void;
  reset: () => void;
}

/**
 * Implementación del wrapper que encapsula la librería web-vitals
 * y proporciona funcionalidad de reset.
 */
class WebVitalsWrapper implements WebVitalsInterface {
  private isActive: boolean = false;
  private registeredCallbacks: Map<string, ReportCallback> = new Map();
  private registeredOptions: Map<string, WebVitalsReportOptions> = new Map();

  /**
   * Obtiene el Largest Contentful Paint (LCP).
   * Mide el tiempo de renderizado del elemento más grande visible.
   */
  getCLS(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('CLS', onReport);
    this.registeredOptions.set('CLS', options || {});
    this.isActive = true;
    webVitalsGetCLS(onReport, options);
  }

  /**
   * Obtiene el First Contentful Paint (FCP).
   * Mide el tiempo hasta que el primer contenido es renderizado.
   */
  getFCP(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('FCP', onReport);
    this.registeredOptions.set('FCP', options || {});
    this.isActive = true;
    webVitalsGetFCP(onReport, options);
  }

  /**
   * Obtiene el First Input Delay (FID).
   * Mide el tiempo de respuesta a la primera interacción del usuario.
   */
  getFID(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('FID', onReport);
    this.registeredOptions.set('FID', options || {});
    this.isActive = true;
    webVitalsGetFID(onReport, options);
  }

  /**
   * Obtiene el Largest Contentful Paint (LCP).
   * Mide el rendimiento de carga percibido por el usuario.
   */
  getLCP(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('LCP', onReport);
    this.registeredOptions.set('LCP', options || {});
    this.isActive = true;
    webVitalsGetLCP(onReport, options);
  }

  /**
   * Obtiene el Time To First Byte (TTFB).
   * Mide el tiempo de respuesta del servidor.
   */
  getTTFB(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('TTFB', onReport);
    this.registeredOptions.set('TTFB', options || {});
    this.isActive = true;
    webVitalsGetTTFB(onReport, options);
  }

  /**
   * Versión observador de CLS que reporta múltiples veces.
   */
  onCLS(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('onCLS', onReport);
    this.registeredOptions.set('onCLS', options || {});
    this.isActive = true;
    webVitalsOnCLS(onReport, options);
  }

  /**
   * Versión observador de FCP que reporta múltiples veces.
   */
  onFCP(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('onFCP', onReport);
    this.registeredOptions.set('onFCP', options || {});
    this.isActive = true;
    webVitalsOnFCP(onReport, options);
  }

  /**
   * Versión observador de FID que reporta múltiples veces.
   */
  onFID(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('onFID', onReport);
    this.registeredOptions.set('onFID', options || {});
    this.isActive = true;
    webVitalsOnFID(onReport, options);
  }

  /**
   * Versión observador de LCP que reporta múltiples veces.
   */
  onLCP(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('onLCP', onReport);
    this.registeredOptions.set('onLCP', options || {});
    this.isActive = true;
    webVitalsOnLCP(onReport, options);
  }

  /**
   * Versión observador de TTFB que reporta múltiples veces.
   */
  onTTFB(onReport: ReportCallback, options?: WebVitalsReportOptions): void {
    this.registeredCallbacks.set('onTTFB', onReport);
    this.registeredOptions.set('onTTFB', options || {});
    this.isActive = true;
    webVitalsOnTTFB(onReport, options);
  }

  /**
   * Reinicia el estado del wrapper, limpiando todos los
   * callbacks registrados y deshabilitando la recolección.
   */
  reset(): void {
    this.registeredCallbacks.clear();
    this.registeredOptions.clear();
    this.isActive = false;
  }

  /**
   * Verifica si el wrapper está actualmente activo.
   */
  getIsActive(): boolean {
    return this.isActive;
  }

  /**
   * Obtiene el número de callbacks registrados.
   */
  getRegisteredCount(): number {
    return this.registeredCallbacks.size;
  }
}

/**
 * Instancia singleton del wrapper de web-vitals.
 */
export const webVitals: WebVitalsInterface = new WebVitalsWrapper();

// === ARCHIVO: src/app/core/interceptors/auth.interceptor.ts ===
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
  
  const isApiCall = req.url.includes('/api/');
  const isAuthEndpoint = req.url.includes('/auth/') || req.url.includes('/login');
  
  if (token && isApiCall && !isAuthEndpoint) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    return next(authReq).pipe(
      tap({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            console.log(`[AuthInterceptor] Peticion exitosa a ${req.url}`);
          }
        },
        error: (error) => {
          if (error.status === 401) {
            console.warn('[AuthInterceptor] Token expirado, limpiando session');
            localStorage.removeItem('auth_token');
            sessionStorage.removeItem('auth_token');
            window.location.href = '/login';
          } else if (error.status === 403) {
            console.warn('[AuthInterceptor] Acceso denegado al recurso');
          }
        },
      })
    );
  }
  
  if (isApiCall && !isAuthEndpoint) {
    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });
    return next(authReq);
  }
  
  return next(req);
};

// === ARCHIVO: src/app/core/interceptors/error.interceptor.ts ===
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, switchMap, retry, retryWhen, delayWhen } from 'rxjs/operators';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<any> => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Error desconocido';
      
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error del cliente: ${error.error.message}`;
      } else {
        errorMessage = `Error del servidor: ${error.status} - ${error.message}`;
        
        switch (error.status) {
          case 0:
            console.error('[ErrorInterceptor] Sin conexion con el servidor');
            errorMessage = 'No se puede conectar con el servidor. Verifica tu conexion a internet.';
            break;
          case 400:
            console.error('[ErrorInterceptor] Solicitud incorrecta:', error.url);
            errorMessage = error.error?.message || 'Solicitud incorrecta. Verifica los datos enviados.';
            break;
          case 404:
            console.error('[ErrorInterceptor] Recurso no encontrado:', error.url);
            errorMessage = 'El recurso solicitado no fue encontrado.';
            break;
          case 500:
            console.error('[ErrorInterceptor] Error interno del servidor:', error.url);
            errorMessage = 'Error interno del servidor. Por favor, intenta mas tarde.';
            break;
          case 503:
            console.error('[ErrorInterceptor] Servicio no disponible:', error.url);
            errorMessage = 'El servicio no esta disponible temporalmente.';
            break;
          default:
            console.error(`[ErrorInterceptor] Error HTTP ${error.status}:`, error.message);
        }
      }
      
      const errorLog = {
        timestamp: new Date().toISOString(),
        url: req.url,
        method: req.method,
        status: error.status,
        message: errorMessage,
        error: error.error,
      };
      
      console.error('[ErrorInterceptor] Error capturado:', errorLog);
      
      return throwError(() => ({
        ...error,
        message: errorMessage,
        logged: true,
      }));
    }),
    retryWhen((errors) =>
      errors.pipe(
        delayWhen((error, index) => {
          const retryAttempts = 3;
          const retryDelay = 1000;
          
          if (index >= retryAttempts) {
            throw error;
          }
          
          if (error.status === 0 || error.status >= 500) {
            console.log(`[ErrorInterceptor] Reintento ${index + 1} de ${retryAttempts}`);
            return timer(retryDelay * Math.pow(2, index));
          }
          
          throw error;
        })
      )
    )
  );
};

// === ARCHIVO: src/app/features/transactions/transactions.routes.ts ===
import { Routes } from '@angular/router';

export const TRANSACTIONS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./transactions-list/transactions-list.component').then(
        (m) => m.TransactionsListComponent
      ),
    title: 'Lista de Transacciones | Financial Portal',
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./transaction-detail/transaction-detail.component').then(
        (m) => m.TransactionDetailComponent
      ),
    title: 'Detalle de Transacción | Financial Portal',
  },
];

// === ARCHIVO: src/app/features/reports/reports.routes.ts ===
import { Routes } from '@angular/router';

export const REPORTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./reports-dashboard/reports-dashboard.component').then(
        (m) => m.ReportsDashboardComponent
      ),
    title: 'Panel de Reportes | Financial Portal',
  },
  {
    path: 'monthly',
    loadComponent: () =>
      import('./monthly-report/monthly-report.component').then(
        (m) => m.MonthlyReportComponent
      ),
    title: 'Reporte Mensual | Financial Portal',
  },
  {
    path: 'annual',
    loadComponent: () =>
      import('./annual-report/annual-report.component').then(
        (m) => m.AnnualReportComponent
      ),
    title: 'Reporte Anual | Financial Portal',
  },
];
```
