


export async function generateStaticParams() {
    // If you don't need any parameters, return an empty array
    return [];
  }
  

export default function CategoryPage({ params }) {
  
    return (
        <>
            <CategoryPageComponent data={params} />
        </>
    );
}



