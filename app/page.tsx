import Link from "next/link";

const Home = () => {
  return (
    <main className="px-[25px] pb-32 lg:px-[187px] pt-[137px]">
      <span className="font-medium text-[20px] text-textPrimary block text-center">
        Published January 18, 2024
      </span>
      <h1 className="font-bold text-[42px] lg:text-[64px] text-center">
        10 Rules of Digital Marketing
      </h1>
      <p className="text-lg mt-3 mb-12 text-center">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual
      </p>
      <img src="img.png" alt="" className="w-full" />

      <div className="mt-[46px] pl-2 pr-8 md:pl-[47px] md:pr-32 flex flex-col gap-8 relative">
        <div className="w-fit flex flex-col gap-4 absolute top-0 right-0">
          <Link href="/">
            <img src="/instagram.svg" alt="" />
          </Link>
          <Link href="/">
            <img src="/x.svg" alt="" />
          </Link>
          <Link href="/">
            <img src="/fb.svg" alt="" />
          </Link>
        </div>
        <p className="font-medium text-2xl leading-[39px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual publishing
          industries for previewing layouts and visual{" "}
        </p>

        <p className="text-base leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          dapibus nibh. Vestibulum nisl ligula, tincidunt at erat et,
          scelerisque ornare lacus. Duis ac orci est. Fusce non elit maximus,
          aliquam neque sed, tincidunt dui. Mauris non blandit nisl. Donec eget
          augue rutrum, consectetur lectus maximus, pellentesque metus. Integer
          eu leo id ipsum posuere venenatis ac sed nisi. Donec a augue at sem
          molestie molestie. Quisque sollicitudin, dolor vel mattis eleifend,
          lacus justo efficitur nisl, pharetra vestibulum justo massa quis arcu.
          Phasellus vitae ligula malesuada, fringilla ligula eget, tempus erat.
        </p>

        <p className="text-base leading-8">
          Fusce dapibus laoreet tempus. Curabitur a mattis felis. Vestibulum non
          dignissim nulla. Etiam non pulvinar eros, eu accumsan ex. Maecenas mi
          elit, accumsan ac neque ut, rhoncus tempor quam. In consequat nunc
          tempor, cursus ligula pulvinar, pharetra dolor. Donec congue libero
          elit, ut consequat leo viverra et.
        </p>

        <p className="text-base leading-8">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nulla facilisi. Donec eget porttitor lacus.
          Duis sapien ligula, tincidunt sit amet placerat et, elementum eget
          libero. Maecenas convallis tortor velit, quis efficitur justo faucibus
          eget. Pellentesque ultrices tristique aliquet. Proin eu facilisis
          tortor. Suspendisse vitae enim mauris. Praesent facilisis, ipsum in
          dapibus blandit, magna nisl fringilla nunc, eu porta velit sem a
          mauris. Fusce semper pretium quam eu ornare. Phasellus non lectus in
          nisi pulvinar mollis. Nam nisl urna, facilisis et vestibulum non,
          volutpat rhoncus augue. Praesent non est ac diam vehicula dignissim.
          In a erat ut sapien varius placerat. Suspendisse commodo eget sapien
          id volutpat. Vivamus sit amet dui sit amet neque malesuada luctus.
        </p>

        <p className="text-base leading-8">
          Duis lacinia sodales lorem, at ultrices ex luctus et. Nullam venenatis
          aliquet velit, maximus pellentesque felis molestie non. Vestibulum
          enim turpis, auctor nec venenatis sed, tempus nec tellus. Aenean
          condimentum tincidunt odio ut posuere. Suspendisse fermentum ipsum
          sapien, at efficitur dolor blandit ac. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Nunc quis
          nulla imperdiet augue faucibus mattis a ac odio. Quisque posuere
          interdum lorem, a interdum libero sollicitudin a. Nunc volutpat, nisl
          eget malesuada sagittis, eros lectus faucibus libero, sit amet lacinia
          neque quam non felis. In enim tortor, fringilla consequat odio ut,
          viverra posuere leo. Pellentesque finibus pellentesque velit et
          auctor.
        </p>

        <p className="text-base leading-8">
          Ut quis nisl et turpis elementum lobortis a a felis. Curabitur vitae
          malesuada purus, quis porta nibh. Nunc varius purus efficitur libero
          mattis condimentum. Integer feugiat tellus id eros dignissim
          pellentesque. Suspendisse potenti. Cras scelerisque a arcu in cursus.
          Proin eleifend cursus tristique. Curabitur nec dui mauris. Nunc at
          hendrerit velit, eget malesuada nibh. Duis nunc lectus, condimentum et
          quam quis, porttitor vehicula erat. Praesent vel erat ac eros tempus
          placerat at sed mauris. Nam varius, quam id commodo egestas, libero
          tortor fringilla leo, et consectetur ex nisi sed lacus. Mauris
          pulvinar turpis ac est sagittis, ac porttitor mi aliquam.
        </p>
      </div>
    </main>
  );
};

export default Home;
