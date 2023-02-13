const {VueLoaderPlugin}=require('vue-loader')
const path=require('path')
const glob=require('glob')
const list={}

async function makeList(dirPath,list){
    const files=glob.sync(`${dirPath}/**/index.js`)
    console.log(files)
    for(let file of files){
        const com_name=file.split(/[./]/)[2]
        list[com_name]=`./${file}`
    }
    console.log(list)
}
makeList('components/lib',list)
module.exports={
   entry:list,
   mode:'development',
   output:{
    filename:'[name].umd.js',
    // path:'dist',
    path:path.resolve(__dirname,'dist'),
    library:'mui',
    libraryTarget:'umd'
   },
   plugins:[
    new VueLoaderPlugin()
   ],
   module:{
      rules:[
        {
            test:/\.vue$/,
            use:[
                {
                    loader:'vue-loader'
                }
            ]
        }
      ]
   }
}