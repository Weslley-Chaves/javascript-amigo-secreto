# 🎁 Amigo Secreto

Aplicação em **HTML, CSS e JavaScript** para cadastrar amigos, **sortear pares sem repetição** e garantir que **ninguém tire a si mesmo**. Usa embaralhamento **Fisher–Yates**, validação de entradas e atualização dinâmica do DOM.

---

## ✨ Funcionalidades

* Adicionar nomes com validação e **bloqueio de duplicados** (case-insensitive).
* Sorteio que **evita autoatribuição** (A nunca recebe A).
* Exibição dos pares no formato `Fulano 🎁 Ciclano`.
* **Reiniciar**: limpa listas e volta o foco para o input.

---

## 🧠 Conceitos praticados

* Manipulação do DOM: `getElementById`, `textContent`, `innerHTML`.
* Arrays e utilidades: `push`, `join`, `some`, `map`, **spread** (`[...]`).
* Embaralhamento **Fisher–Yates** e número aleatório inteiro.
* Funções puras e separação de responsabilidades (`adicionar`, `sortear`, `embaralhar`, `temAlguemComMesmoNome`, `reiniciar`).
* Boas práticas de UX: foco no input, mensagens de erro e limpeza após ação.

---

## 🗂️ Estrutura sugerida

```
amigo-secreto/
├─ assets/
│  └─ imagem-presente.png
├─ js/
│  └─ app.js
├─ style.css
├─ index.html
└─ README.md
```

---

## ⚙️ Como executar

1. Faça o clone/Download do repositório.
2. Abra **`index.html`** no navegador.
3. Digite um nome, clique **Adicionar**; repita.
4. Clique **Sortear** para gerar os pares.

---

## 🔎 Trechos-chave

### Embaralhar (Fisher–Yates)

```js
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = numeroAleatorio(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

### Garantir que ninguém tire a si mesmo

```js
while (temAlguemComMesmoNome(sorteio, destino)) {
  destino = embaralhar([...sorteio]);
}
```

---

## 🛠️ Tecnologias

**HTML5 · CSS3 · JavaScript (ES6+)**

---

## 👨‍💻 Autor

**Weslley Chaves**

📎 [GitHub](https://github.com/Weslley-Chaves) | 💼 [LinkedIn](https://www.linkedin.com/in/weslley-s-chaves-789890228/)

🗓️ Última atualização: **01/11/2025**
