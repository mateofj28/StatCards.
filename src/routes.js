import Home from "./lib/pages/Home.svelte";
import About from "./lib/pages/dasboard.svelte";
import NotFound from "./lib/pages/NotFound.svelte";
import Page1 from './lib/pages/Page1.svelte';
import Page2 from './lib/pages/Page2.svelte';
import Page3 from './lib/pages/Page3.svelte';
import Page4 from './lib/pages/Page4.svelte';
import Page5 from './lib/pages/Page5.svelte';

export default {
  "/": Home,
  "/dashboard/*": About,
  "*": NotFound,
};
