# Guia de Contribuição — Tebex Log

## Branches

| Branch | Uso |
|--------|-----|
| `main` | Produção — deploy automático na Vercel |
| `develop` | Desenvolvimento — integração de features |
| `feature/nome` | Nova funcionalidade |
| `fix/nome` | Correção de bug |

## Fluxo de trabalho

```bash
# 1. Cria branch a partir de develop
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-feature

# 2. Desenvolve e commita
git add .
git commit -m "feat: descrição clara do que foi feito"

# 3. Sobe e abre PR para develop
git push origin feature/nome-da-feature
```

## Padrão de commits (Conventional Commits)

| Prefixo | Uso |
|---------|-----|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `style:` | Mudança visual sem lógica |
| `refactor:` | Refatoração de código |
| `docs:` | Documentação |
| `chore:` | Config, dependências |

## Identidade Visual

Nunca alterar:
- Cores fora da paleta do manual
- Fonte dos títulos (Owners XWide Bold quando disponível)
- Logo em cores não autorizadas (só branco/preto)
- Proporções da logo
