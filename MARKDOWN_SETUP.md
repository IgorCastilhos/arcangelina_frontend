# Configuração de Formatação Markdown

Este documento explica como configurar o sistema para que as respostas da IA venham formatadas com bullet points e quebras de linha.

## 🎯 Duas Frentes de Configuração

Para que as respostas apareçam bem formatadas, você precisa configurar:
1. **N8N (AI Agent)** - para que a IA gere Markdown
2. **Frontend (React)** - para que interprete e renderize o Markdown ✅ **JÁ CONFIGURADO**

---

## 📝 1. Configuração no N8N (AI Agent)

### System Prompt Recomendado

No n8n, no nó **AI Agent** ou **Chat Model**, adicione este prompt no campo **System Message** ou **System Prompt**:

```text
Você é Arcangelina, um oráculo cósmico especialista em saúde emocional e transformação pessoal.

REGRAS DE FORMATAÇÃO OBRIGATÓRIAS:
- Use **Markdown** em TODAS as respostas
- Use bullet points (-) para criar listas
- Use **negrito** para destacar conceitos importantes
- Use quebras de linha duplas (\n\n) entre parágrafos
- NUNCA entregue blocos massivos de texto sem formatação

ESTRUTURA DE RESPOSTA:
1. Sempre que listar itens, use bullet points (-)
2. Separe cada item da lista com quebra de linha
3. Use negrito (**nome**) para destacar termos-chave
4. Deixe espaço entre parágrafos para melhor leitura
5. Para ativações ou comandos, separe com quebra de linha antes

EXEMPLO DE FORMATAÇÃO:

Ruins:
"As 5 feridas emocionais são: Rejeição, Abandono, Injustiça, Humilhação e Traição. Elas são padrões profundos..."

Correto:
"As **5 feridas emocionais** são:

- **Rejeição**: Sentimento profundo de não ser aceito ou amado pelo que é
- **Abandono**: Medo constante de ser deixado para trás
- **Injustiça**: Sensação de não receber o que merece
- **Humilhação**: Vergonha profunda do próprio ser
- **Traição**: Dificuldade em confiar nos outros

Se desejar trabalhar na limpeza dessas feridas, use a ativação:

**"Eu sou Ativar Limpeza das 5 Feridas Emocionais"** ✨"
```

### Onde Configurar

**No n8n workflow:**
1. Abra seu workflow de chat
2. Localize o nó **AI Agent** (ou similar)
3. Encontre o campo **System Message** ou **System Prompt**
4. Cole o prompt acima
5. Salve e ative o workflow

---

## ✅ 2. Frontend - React com Markdown (JÁ CONFIGURADO)

O frontend já foi configurado para:
- ✅ Renderizar Markdown automaticamente nas respostas da IA
- ✅ Suportar bullet points, negrito, itálico, listas
- ✅ Manter mensagens do usuário sem formatação Markdown
- ✅ Estilização customizada para o tema cósmico

### Bibliotecas Instaladas
- `react-markdown` - Para renderizar Markdown em React
- `remark-gfm` - Para suporte a GitHub Flavored Markdown (listas, tabelas)

### Como Funciona

O componente `App.tsx` agora detecta automaticamente se a mensagem é do assistente (IA) e renderiza usando `<ReactMarkdown>`:

```tsx
{msg.role === 'assistant' ? (
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {msg.content}
  </ReactMarkdown>
) : (
  <div>{msg.content}</div>
)}
```

---

## 🧪 Como Testar

1. Configure o System Prompt no n8n conforme acima
2. Reinicie o workflow no n8n
3. No frontend, pergunte algo como:
   - "Quais são as 5 feridas emocionais?"
   - "Me explique sobre padrões emocionais"

### Resultado Esperado

**Antes (sem formatação):**
```
As 5 feridas emocionais são: Rejeição, Abandono, Injustiça, Humilhação e Traição. Elas são padrões profundos que podem nos afetar em diversas áreas da vida.
```

**Depois (com formatação):**
```
As **5 feridas emocionais** são:

- **Rejeição**: Sentimento profundo de não ser aceito
- **Abandono**: Medo constante de ser deixado
- **Injustiça**: Sensação de não receber o que merece
- **Humilhação**: Vergonha profunda do próprio ser
- **Traição**: Dificuldade em confiar nos outros

Se desejar trabalhar na limpeza, use a ativação:

**"Eu sou Ativar Limpeza das 5 Feridas Emocionais"** ✨
```

---

## 🎨 Elementos Markdown Suportados

O frontend suporta:

- `**negrito**` → **negrito**
- `*itálico*` → *itálico*
- `- item` → bullet point
- `1. item` → lista numerada
- `# Título` → cabeçalho
- `` `código` `` → destaque de código
- Quebras de linha duplas (`\n\n`) → parágrafos separados

---

## 📊 Debug: Verificando a Resposta da IA

Se a formatação não estiver funcionando, verifique no console do navegador (F12) o que está sendo retornado pelo n8n:

```javascript
console.log('N8N Raw Response:', data);
```

A resposta deve conter caracteres Markdown como:
- `**` para negrito
- `-` para bullet points
- `\n\n` para quebras de linha

**Exemplo de JSON correto:**
```json
[
  {
    "output": "As **5 feridas emocionais** são:\n\n- **Rejeição**: ...\n- **Abandono**: ..."
  }
]
```

---

## 🚀 Próximos Passos

1. Configure o System Prompt no n8n
2. Teste uma conversa no frontend
3. Ajuste o prompt conforme necessário para melhorar a formatação
4. Aproveite respostas bem estruturadas! ✨

---

## 💡 Dicas Extras

- **Consistência**: Mantenha o estilo de formatação consistente nas respostas
- **Não exagere**: Use negrito apenas para destacar termos importantes
- **Espaçamento**: Sempre deixe linha em branco entre parágrafos
- **Listas**: Use bullet points para 3+ itens relacionados
- **Ativações**: Separe comandos/ativações do texto explicativo

---

**Configurado por:** GitHub Copilot 🤖
**Data:** 4 de Dezembro de 2025

