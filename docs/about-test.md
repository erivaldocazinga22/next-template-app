## Tipos de testes: unitários, integração e e2e

### 🧪 Testes unitários (`*.spec.ts(x)`)

Testam **um único elemento isolado** — como funções puras, classes ou até
componentes pequenos. Se esse elemento depende de outro (ex: uma função chama
outra, ou um componente usa outro), **a dependência deve ser mockada**. Esses
testes não envolvem DOM, rede, banco, nem efeitos colaterais reais.

### 🔄 Testes de integração (`*.test.ts(x)`)

Validam a **integração entre dois ou mais elementos reais do sistema**, como um
componente que usa outros componentes, um hook que depende de contexto, ou uma
função que interage com a API interna. Não há efeitos colaterais externos reais
— **mockamos banco, rede, arquivos, e-mail**, etc.

### 🌐 Testes end-to-end (`*.e2e.ts`)

Simulam o **comportamento real do usuário** ou do sistema completo. Envolvem o
app rodando de verdade (via Playwright, Vitest com fetch real, etc.). Idealmente
usam um banco de dados separado e limpo, podendo ou não mockar serviços externos
como e-mail, storage, etc.