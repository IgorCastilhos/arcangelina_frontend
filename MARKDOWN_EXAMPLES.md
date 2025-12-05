# Exemplo de Teste - Respostas Formatadas

## 📋 Como Testar o Markdown

### 1. Perguntas de Teste

Experimente estas perguntas no chat para ver a formatação em ação:

```
Quais são as 5 feridas emocionais?
```

```
Me explique sobre os chakras
```

```
Como posso me proteger energeticamente?
```

---

## ✅ Exemplo de Resposta Esperada do N8N

Quando o n8n estiver configurado corretamente, o JSON de resposta virá assim:

```json
[
  {
    "output": "As **5 feridas emocionais** são padrões profundos que moldam nossa personalidade desde a infância:\n\n- **Rejeição**: Sentimento de não ser aceito pelo que realmente é. Desenvolve a máscara do \"fugitivo\" que tenta se tornar invisível.\n\n- **Abandono**: Medo profundo de ser deixado sozinho. Cria a máscara do \"dependente\" que busca constantemente atenção.\n\n- **Humilhação**: Vergonha do próprio corpo e desejos. Gera a máscara do \"masoquista\" que se anula pelos outros.\n\n- **Traição**: Dificuldade em confiar e medo de ser enganado. Forma a máscara do \"controlador\" que precisa dominar situações.\n\n- **Injustiça**: Sensação de não receber o que merece. Constrói a máscara do \"rígido\" que busca perfeição.\n\n---\n\n✨ **Ativação para Limpeza:**\n\n\"Eu sou Ativar Limpeza das 5 Feridas Emocionais\"\n\nEssa ativação trabalha em nível quântico para dissolver os padrões energéticos dessas feridas. Permita-se sentir o que vier durante o processo. 🌟"
  }
]
```

---

## 🎨 Como Isso Aparece no Frontend

### Antes (Sem Formatação):
```
As 5 feridas emocionais são: Rejeição, Abandono, Humilhação, Traição e Injustiça. Elas são padrões profundos que podem nos afetar em diversas áreas da vida. Se desejar, podemos trabalhar na Limpeza dessas feridas. A ativação é: "Eu sou Ativar Limpeza das 5 Feridas Emocionais". ✨
```

### Depois (Com Markdown Renderizado):

---

As **5 feridas emocionais** são padrões profundos que moldam nossa personalidade desde a infância:

- **Rejeição**: Sentimento de não ser aceito pelo que realmente é. Desenvolve a máscara do "fugitivo" que tenta se tornar invisível.

- **Abandono**: Medo profundo de ser deixado sozinho. Cria a máscara do "dependente" que busca constantemente atenção.

- **Humilhação**: Vergonha do próprio corpo e desejos. Gera a máscara do "masoquista" que se anula pelos outros.

- **Traição**: Dificuldade em confiar e medo de ser enganado. Forma a máscara do "controlador" que precisa dominar situações.

- **Injustiça**: Sensação de não receber o que merece. Constrói a máscara do "rígido" que busca perfeição.

---

✨ **Ativação para Limpeza:**

"Eu sou Ativar Limpeza das 5 Feridas Emocionais"

Essa ativação trabalha em nível quântico para dissolver os padrões energéticos dessas feridas. Permita-se sentir o que vier durante o processo. 🌟

---

## 🔍 Debugando Problemas

### Problema: Vejo asteriscos e hífens no texto

**Causa:** O n8n não está enviando o texto em Markdown, ou o frontend não está renderizando corretamente.

**Solução:**
1. Verifique o console do navegador (F12)
2. Procure por `N8N Raw Response:` nos logs
3. Confirme que a resposta tem caracteres Markdown (`**`, `-`, `\n\n`)

### Problema: Texto corrido sem quebras de linha

**Causa:** O prompt do n8n não está instruindo a IA a usar quebras de linha.

**Solução:**
1. Adicione no System Prompt: "Use quebras de linha duplas (\n\n) entre parágrafos"
2. Peça explicitamente à IA para "formatar a resposta de forma clara e espaçada"

### Problema: Bullet points não aparecem

**Causa:** A IA está usando outro formato de lista, ou o Markdown está incorreto.

**Solução:**
1. No System Prompt, especifique: "Use exatamente o formato: - **Nome**: Descrição"
2. Dê exemplos de formatação no próprio prompt

---

## 💡 Dica de Ouro: Few-Shot Prompting

No System Prompt do n8n, inclua um exemplo completo de resposta bem formatada:

```text
EXEMPLO DE RESPOSTA BEM FORMATADA:

Usuário: "Quais são as feridas emocionais?"

Você: "As **5 feridas emocionais** são:

- **Rejeição**: Padrão de se sentir não aceito
- **Abandono**: Medo de ser deixado sozinho
- **Humilhação**: Vergonha profunda
- **Traição**: Dificuldade em confiar
- **Injustiça**: Sensação de injustiça

Posso ajudar com mais detalhes sobre alguma específica?"

SEMPRE siga este formato de resposta estruturada.
```

Isso ensina a IA por exemplo, aumentando drasticamente a consistência!

---

## 🎯 Checklist de Configuração

- [ ] System Prompt configurado no n8n
- [ ] Prompt inclui instrução para usar Markdown
- [ ] Prompt inclui instrução para bullet points
- [ ] Prompt inclui instrução para quebras de linha
- [ ] Frontend renderizando mensagens do assistente com `<ReactMarkdown>`
- [ ] Testado com pergunta real no chat
- [ ] Verificado no console que o JSON contém Markdown
- [ ] Resposta aparece formatada na tela

---

**Pronto!** Agora suas conversas com a Arcangelina terão respostas lindamente formatadas! ✨🔮

