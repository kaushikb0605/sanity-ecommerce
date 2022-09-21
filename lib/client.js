import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client=sanityClient({
    projectId:'ljpoh4uq',
    dataset:'production',
    apiVersion:'2022-09-19',
    useCdn:true,
    token:`${process.env.NEXT_PUBLIC_SANITY_TOKEN}`
})

const builder=imageUrlBuilder(client);

export const urlFor=(source)=>{return builder.image(source)}