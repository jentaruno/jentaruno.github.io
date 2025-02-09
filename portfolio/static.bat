call next build
call next export
mkdir .\out\bp-easy-chair
xcopy ..\bp-easy-chair .\out\bp-easy-chair /s/h/y
call touch ./out/.nojekyll
echo 'https://jentaruno.github.io' > ./out/CNAME