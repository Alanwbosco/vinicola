import React from 'react'
import Header from './Header'

const Carrinho = () => {
    const [vlrTotal, setValorTotal] = React.useState(0);
    const [input, setInput] = React.useState('');
    
    const produto1 = window.localStorage.getItem('Vinho TINTO') ? window.localStorage.getItem('Vinho TINTO') : null ;
    const produto2 = window.localStorage.getItem('Vinho Rose1') ? window.localStorage.getItem('Vinho Rose1') : null;
    const produto3 = window.localStorage.getItem('Vinho branco') ? window.localStorage.getItem('Vinho branco') : null;
    const produto4 = window.localStorage.getItem('Vinho Branco Seco') ? window.localStorage.getItem('Vinho Branco Seco') : null;
    const produto5 = window.localStorage.getItem('Vinho Tinto Argentino') ? window.localStorage.getItem('Vinho Tinto Argentino') : null;
    const produto6 = window.localStorage.getItem('Vinho Branco Sec') ? window.localStorage.getItem('Vinho Branco Sec') : null;
    const produto7 = window.localStorage.getItem('Vinho Verde Doc Branco') ? window.localStorage.getItem('Vinho Verde Doc Branco') : null;
    const produto8 = window.localStorage.getItem('Vinho Portuges Rose Atlantico') ? window.localStorage.getItem('Vinho Portuges Rose Atlantico') : null;


    let produtosTratados = [];
    if(produto1 !== null) produtosTratados.push(JSON.parse(produto1)); 
    if(produto2 !== null) produtosTratados.push(JSON.parse(produto2)); 
    if(produto3 !== null) produtosTratados.push(JSON.parse(produto3));
    if(produto4 !== null) produtosTratados.push(JSON.parse(produto4));    
    if(produto5 !== null) produtosTratados.push(JSON.parse(produto5));    
    if(produto6 !== null) produtosTratados.push(JSON.parse(produto6));    
    if(produto7 !== null) produtosTratados.push(JSON.parse(produto7));    
    if(produto8 !== null) produtosTratados.push(JSON.parse(produto8));    

    var valorTotal = 0;
    var valorPeso = 0;
    produtosTratados.map((item) =>{
      item.produto.preco *= item.qtd_vezes;
      item.produto.peso *=item.qtd_vezes;
      valorPeso = (parseInt(item.produto.peso/1000) *5);
      valorTotal += item.produto.preco + (parseInt(item.produto.peso/1000) *5);
    })
    const produtosFinal = [];
    produtosTratados.map((item) => produtosFinal.push(item.produto))
    const handleClick = () => {
        if(parseInt(input) > 100){
          console.log(parseInt(input))
          
          valorTotal += valorPeso*(parseInt(input)/100)
          setValorTotal(valorTotal);
        }else{
          setValorTotal(valorTotal);
        }
    }
    return (
    <>
      <Header />
      
      <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Produtos no carrinho:</h2>
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Valor total {vlrTotal ? vlrTotal : valorTotal}</h2>  
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {produtosFinal.map((produto,i) => (
                      <div  className="group relative">
                      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                          src={produto.foto}
                          alt={produto.nome}
                          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                      </div>
                      <div className="mt-4 flex justify-between">
                      <div>
                          <h3 className="text-sm text-gray-700">
  
                              <span aria-hidden="true" className="absolute inset-0" />
                              {produto.nome}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500"></p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">R$ {produto.preco}</p>
                      </div>
                      <h3 className="text-sm text-gray-700">
  
                          <span aria-hidden="true" className="absolute inset-0" />
                              Peso:  {produto.peso} gramas
                          </h3>
                  </div>
                  ))}
                  
              </div>
          </div>
      </div>
      <label> Digite a distância em km</label>
      <input 
        type="text"
        value={input}
        onChange={({target}) => setInput(target.value)}
      />
      <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none" type="submit" onClick={handleClick}>Calcular Frete</button>
    </>
  )
}

export default Carrinho