import express, { Request, Response } from "express"
import { Produto } from "./Produto"

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())

function helloWorld(req: Request, res: Response): void {
  res.status(200).send("Hello World!!!")
}

function filtraProdutoPorID(req: Request, res: Response): void {
  try {
    const id = req.params.id

    if (!id) {
      throw new Error("Necessário informar o ID")
    }

    res.status(200).json({
      status: "success",
      data: {
        id: id
      }
    })
  } catch (e: unknown) {
    res.status(400).json({
      status: "error",
      message: (e as Error).message
    })
  }
}

function filtrarProdutoPorNome(req: Request, res: Response): void {
  try {
    const name = req.query.name

    if (!name) {
      throw new Error("Necessário informar o nome")
    }

    res.status(200).json({
      status: "success",
      data: {
        name: name
      }
    })
  } catch (e: unknown) {
    res.status(400).json({
      status: "error",
      message: (e as Error).message
    })
  }
}

function novoProduto(req: Request, res: Response): void {
  try {
    const data: any = req.body

    if (!data.nome || !data.preco || !data.fabricante) {
      throw new Error("Produto requer nome, preço e fabricante")
    }

    if (
      !data.fabricante.nome ||
      !data.fabricante.endereco ||
      !data.fabricante.endereco.cidade ||
      !data.fabricante.endereco.pais
    ) {
      throw new Error("Fabricante requer nome, endereco.cidade e endereco.pais")
    }

    const produto = new Produto(data.id, data.nome, data.preco, data.fabricante)

    res.status(200).json({
      status: "success",
      data: produto
    })
  } catch (e: unknown) {
    res.status(400).json({
      status: "error",
      message: (e as Error).message
    })
  }
}

app.get("/api/hello", helloWorld)
app.get("/api/product/:id", filtraProdutoPorID)
app.get("/api/product", filtrarProdutoPorNome)
app.post("/api/product", novoProduto)

app.listen(PORT, () => {
  console.log(`API em execução no URL: http://localhost:${PORT}`)
})