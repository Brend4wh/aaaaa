export const getCulinariaData = async (nome) => {
    try{
        const response = await fetch(`api ${nome}`);
        const data = await response.json();
        return data;
    } catch(error){
        console.error("Erro ao buscar o Pokémon:", error);
    }
};