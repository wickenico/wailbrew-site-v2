import type { ReactNode } from "react";
import { Cmd, InWailBrew } from "@/components/GuideBlocks";
import { guidePath } from "./guides";

const GuideLink = ({ slug, children }: { slug: string; children: ReactNode }) => (
  <a href={guidePath(slug)}>{children}</a>
);

export const guideArticles: Record<string, ReactNode> = {
  "update-homebrew-packages": (
    <>
      <p>
        Keeping your Homebrew packages current gets you security fixes and new features, but Homebrew splits the job
        into two commands with confusingly similar names. Here's what each one does and how to upgrade everything, or
        just the packages you choose.
      </p>

      <h2>brew update vs. brew upgrade</h2>
      <ul>
        <li>
          <code>brew update</code> refreshes Homebrew itself and its list of available package versions. It doesn't
          change any software you have installed.
        </li>
        <li>
          <code>brew upgrade</code> actually installs the newer versions of your installed formulae and casks.
        </li>
      </ul>
      <p>
        You rarely need to run <code>brew update</code> by hand: Homebrew updates itself automatically before{" "}
        <code>brew install</code> and <code>brew upgrade</code> if it hasn't done so recently.
      </p>

      <h2>See what's outdated</h2>
      <Cmd>{"brew update\nbrew outdated"}</Cmd>
      <p>
        This lists every installed package with a newer version available, showing the installed and the latest version
        side by side.
      </p>

      <h2>Upgrade everything</h2>
      <Cmd>brew upgrade</Cmd>
      <p>
        Without arguments, <code>brew upgrade</code> upgrades all outdated formulae and casks in one go. Afterwards
        Homebrew removes the old versions of what it just upgraded.
      </p>

      <h2>Upgrade single packages</h2>
      <Cmd>{"brew upgrade wget\nbrew upgrade --cask firefox"}</Cmd>
      <p>
        Pass one or more package names to upgrade only those. Use <code>--cask</code> when a formula and a cask share
        the same name.
      </p>

      <h2>Include apps that update themselves</h2>
      <p>
        Many Mac apps such as browsers have their own updater. Their casks are marked as auto-updating, and{" "}
        <code>brew upgrade</code> skips them by default, as it does casks without a fixed version. To upgrade those too,
        add <code>--greedy</code>:
      </p>
      <Cmd>{"brew outdated --cask --greedy\nbrew upgrade --cask --greedy"}</Cmd>
      <p>
        <code>--greedy-auto-updates</code> and <code>--greedy-latest</code> narrow this down to only one of the two
        groups.
      </p>

      <h2>Keep a formula on its current version</h2>
      <p>
        If an upgrade would break your project, pin the formula. Pinned formulae are skipped by{" "}
        <code>brew upgrade</code> until you unpin them:
      </p>
      <Cmd>{"brew pin node\nbrew list --pinned\nbrew unpin node"}</Cmd>

      <InWailBrew>
        <p>
          The Outdated view shows every available update at a glance. Upgrade a single package, a selection or
          everything with one click. Background checks put a badge on the Dock icon when updates are waiting, and a
          setting lets you include greedy cask updates. The session log shows every <code>brew</code> command WailBrew
          runs.
        </p>
      </InWailBrew>

      <h2>Free up the space afterwards</h2>
      <p>
        Upgrades leave downloads behind in Homebrew's cache. Our guide to{" "}
        <GuideLink slug="homebrew-cleanup">brew cleanup</GuideLink> shows how to reclaim that space.
      </p>
    </>
  ),

  "uninstall-homebrew-packages": (
    <>
      <p>
        Removing a package with Homebrew takes one command, but doing it cleanly takes a little more: you want to avoid
        breaking other packages, remove leftover app files, and get rid of dependencies that nothing needs anymore.
      </p>

      <h2>1. Check what depends on the package</h2>
      <Cmd>brew uses --installed openssl@3</Cmd>
      <p>
        This lists the installed formulae that need the package. If the list isn't empty, removing it will break them.{" "}
        <code>brew deps --tree wget</code> shows the opposite direction: what a package itself depends on.
      </p>

      <h2>2. Uninstall a formula</h2>
      <Cmd>brew uninstall wget</Cmd>
      <p>
        Homebrew refuses to uninstall a formula that other installed formulae still require and tells you which ones.
        You can override this with <code>--ignore-dependencies</code>, but the dependent packages will probably stop
        working.
      </p>

      <h2>3. Uninstall a cask and its leftovers</h2>
      <Cmd>brew uninstall --cask firefox</Cmd>
      <p>
        This removes the app, but settings, caches and other support files in <code>~/Library</code> stay behind. To
        remove those too, use <code>--zap</code>:
      </p>
      <Cmd>brew uninstall --zap --cask firefox</Cmd>
      <p>
        Zap deletes the files listed in the cask's <em>zap</em> section. Use it only when you're sure you don't want the
        app's data anymore: some of those files may be shared with other apps from the same developer.
      </p>

      <h2>4. Remove dependencies nobody needs</h2>
      <p>
        Formulae that were installed only as a dependency stay on your Mac after you remove the package that needed
        them. <code>brew autoremove</code> finds and removes them. Preview the list first:
      </p>
      <Cmd>{"brew autoremove --dry-run\nbrew autoremove"}</Cmd>

      <h2>Find packages you can safely remove</h2>
      <Cmd>brew leaves</Cmd>
      <p>
        <code>brew leaves</code> lists the installed formulae that no other installed formula depends on. That's usually
        the list of things you installed yourself, and a good place to spot tools you no longer use.
      </p>

      <InWailBrew>
        <p>
          The details of every package show its dependencies and dependents, so you know what you'd break before
          clicking uninstall. The Leaves view lists the packages you can safely remove.
        </p>
      </InWailBrew>

      <p>
        Old versions and downloads take up space too. See{" "}
        <GuideLink slug="homebrew-cleanup">how to free up disk space with brew cleanup</GuideLink>.
      </p>
    </>
  ),

  "homebrew-cleanup": (
    <>
      <p>
        Homebrew keeps downloaded installers in a cache and can leave older versions of packages behind. On a Mac that
        has used Homebrew for a while, this easily adds up to several gigabytes. <code>brew cleanup</code> gets that
        space back.
      </p>

      <h2>Check how big the cache is</h2>
      <Cmd>{'du -sh "$(brew --cache)"'}</Cmd>
      <p>
        <code>brew --cache</code> prints the location of Homebrew's download cache, usually{" "}
        <code>~/Library/Caches/Homebrew</code>.
      </p>

      <h2>Preview what would be removed</h2>
      <Cmd>brew cleanup --dry-run</Cmd>
      <p>The dry run lists every file and old version that cleanup would delete, without touching anything.</p>

      <h2>Run the cleanup</h2>
      <Cmd>brew cleanup</Cmd>
      <p>
        This removes old versions of installed formulae and casks, stale lock files and outdated downloads (by default
        those older than 120 days). At the end Homebrew tells you how much space it freed. To clean up just one package,
        add its name: <code>brew cleanup wget</code>.
      </p>

      <h2>Empty the download cache completely</h2>
      <Cmd>brew cleanup --prune=all</Cmd>
      <p>
        <code>--prune=all</code> removes all cached downloads regardless of age. You lose nothing but the ability to
        reinstall a package without downloading it again.
      </p>

      <h2>Doesn't Homebrew do this automatically?</h2>
      <p>
        Partly. After an upgrade, Homebrew removes the old versions of the packages it just upgraded, and it runs a full
        cleanup every 30 days. Running it yourself is still worth it when you need the space now, or after uninstalling
        a lot of packages. To remove dependencies that are no longer needed, see{" "}
        <GuideLink slug="uninstall-homebrew-packages">uninstalling packages cleanly</GuideLink>.
      </p>

      <h2>Run brew doctor while you're at it</h2>
      <Cmd>brew doctor</Cmd>
      <p>
        <code>brew doctor</code> checks your installation for common problems, such as broken symlinks or outdated
        settings, and explains how to fix each one.
      </p>

      <InWailBrew>
        <p>
          The cleanup view shows a dry-run preview first, so you see exactly what will be deleted before you confirm.
          You can also turn on automatic cleanup after upgrades. Next to it, the built-in <code>brew doctor</code> lists
          problems and deprecated formulae.
        </p>
      </InWailBrew>
    </>
  ),

  "homebrew-services": (
    <>
      <p>
        Many formulae, such as PostgreSQL, MySQL, Redis or nginx, are meant to run in the background.{" "}
        <code>brew services</code> starts and stops them for you and can launch them automatically when you log in,
        using macOS's own <code>launchd</code> under the hood.
      </p>

      <h2>List all services</h2>
      <Cmd>brew services list</Cmd>
      <p>
        You'll see every installed formula that provides a service, with its status: <code>started</code>,{" "}
        <code>stopped</code>, <code>none</code> (never started) or <code>error</code>.
      </p>

      <h2>Start a service</h2>
      <Cmd>brew services start postgresql@17</Cmd>
      <p>
        <code>start</code> runs the service now <strong>and</strong> registers it to start automatically at login. If
        you only need it for the current session, use <code>run</code> instead:
      </p>
      <Cmd>brew services run redis</Cmd>

      <h2>Stop or restart a service</h2>
      <Cmd>{"brew services stop postgresql@17\nbrew services restart nginx"}</Cmd>
      <p>
        <code>stop</code> also removes the service from login items, so it stays off after a reboot.{" "}
        <code>restart</code> is what you want after changing a configuration file.
      </p>

      <h2>Get details about a service</h2>
      <Cmd>brew services info redis</Cmd>

      <h2>When a service shows "error"</h2>
      <p>
        The service started but exited. Check its log file: many formulae write logs to{" "}
        <code>$(brew --prefix)/var/log</code>. A common cause is a port that's already in use, for example by a second
        database version that's still running.
      </p>

      <h2>Should you use sudo?</h2>
      <p>
        Usually not. Without <code>sudo</code>, services run as your user and start when you log in. With{" "}
        <code>sudo brew services start</code>, they run as root and start at boot, which you only need for things like
        binding to ports below 1024.
      </p>

      <InWailBrew>
        <p>
          The Services view lists all services with their current status. Start, stop, restart or run any of them with a
          click.
        </p>
      </InWailBrew>
    </>
  ),

  "homebrew-formula-vs-cask": (
    <>
      <p>
        Homebrew installs two kinds of packages: <strong>formulae</strong> and <strong>casks</strong>. The short
        version: formulae are command-line tools and libraries, casks are Mac apps.
      </p>

      <h2>Formulae: command-line tools and libraries</h2>
      <p>
        Tools like <code>git</code>, <code>wget</code>, <code>node</code> or <code>python</code> are formulae. Homebrew
        usually installs them from a precompiled "bottle" and builds them from source only when no bottle is available.
        They live in Homebrew's Cellar (<code>/opt/homebrew/Cellar</code> on Apple Silicon,{" "}
        <code>/usr/local/Cellar</code> on Intel) and are linked into Homebrew's <code>bin</code> folder, so they're on
        your <code>PATH</code>. Homebrew also installs and tracks their dependencies.
      </p>
      <Cmd>brew install wget</Cmd>

      <h2>Casks: Mac apps</h2>
      <p>
        Apps with a graphical interface, like Firefox, Visual Studio Code or Rectangle, are casks. Fonts and some
        plugins are distributed as casks too. Homebrew downloads the developer's official app and moves it into{" "}
        <code>/Applications</code>, just like you would by hand.
      </p>
      <Cmd>brew install --cask firefox</Cmd>
      <p>
        <code>brew install firefox</code> works as well, because Homebrew looks for a cask when no formula has that
        name. Add <code>--cask</code> or <code>--formula</code> when a name exists as both.
      </p>

      <h2>The differences at a glance</h2>
      <div className="overflow-x-auto mb-6">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Formula</th>
              <th>Cask</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What</td>
              <td>CLI tools, libraries, servers</td>
              <td>Mac apps, fonts, plugins</td>
            </tr>
            <tr>
              <td>Installed to</td>
              <td>Homebrew's Cellar, linked into its bin folder</td>
              <td>
                <code>/Applications</code>
              </td>
            </tr>
            <tr>
              <td>Dependencies</td>
              <td>Managed by Homebrew</td>
              <td>Rarely any</td>
            </tr>
            <tr>
              <td>Updates</td>
              <td>
                <code>brew upgrade</code>
              </td>
              <td>
                <code>brew upgrade</code>, plus <code>--greedy</code> for self-updating apps
              </td>
            </tr>
            <tr>
              <td>List installed</td>
              <td>
                <code>brew list --formula</code>
              </td>
              <td>
                <code>brew list --cask</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Updating casks works slightly differently</h2>
      <p>
        Apps with a built-in updater are skipped by <code>brew upgrade</code> unless you add <code>--greedy</code>. Read
        more in <GuideLink slug="update-homebrew-packages">how to update all Homebrew packages</GuideLink>.
      </p>

      <h2>And what are taps?</h2>
      <p>
        A tap is an additional repository of formulae or casks, for example from a company that publishes its own tools.{" "}
        <code>brew tap owner/repo</code> adds it, and its packages install like any other.
      </p>

      <InWailBrew>
        <p>
          Formulae and casks have their own views, and the search covers both. Install, upgrade or remove either with a
          click, and manage your taps in the same place.
        </p>
      </InWailBrew>
    </>
  ),

  "brewfile-backup": (
    <>
      <p>
        A Brewfile is a plain text list of your taps, formulae and casks. With it, setting up a new Mac takes one
        command instead of an afternoon of remembering what you had installed.
      </p>

      <h2>Export your setup</h2>
      <Cmd>brew bundle dump --file=~/Brewfile</Cmd>
      <p>
        This writes everything you have installed into <code>~/Brewfile</code>. Add <code>--force</code> to overwrite an
        existing file and <code>--describe</code> to add a short description above each entry. Without{" "}
        <code>--file</code>, the Brewfile is created in the current folder.
      </p>

      <h2>What's inside</h2>
      <Cmd copyable={false}>
        {'tap "owner/tools"\nbrew "git"\nbrew "node"\ncask "firefox"\ncask "visual-studio-code"'}
      </Cmd>
      <p>
        Each line is one package. You can edit the file by hand, remove things you don't want on the next Mac, or keep
        it in your dotfiles repository.
      </p>

      <h2>Restore on a new Mac</h2>
      <p>
        Install Homebrew from{" "}
        <a href="https://brew.sh" target="_blank" rel="noopener noreferrer">
          brew.sh
        </a>
        , copy your Brewfile over and run:
      </p>
      <Cmd>brew bundle install --file=~/Brewfile</Cmd>
      <p>Homebrew adds the taps and installs every formula and cask in the list.</p>

      <h2>Check and tidy up</h2>
      <Cmd>{"brew bundle check --file=~/Brewfile\nbrew bundle cleanup --file=~/Brewfile"}</Cmd>
      <p>
        <code>check</code> tells you whether anything from the Brewfile is missing. <code>cleanup</code> lists installed
        packages that aren't in the Brewfile. Add <code>--force</code> to actually uninstall them.
      </p>

      <InWailBrew>
        <p>
          Export your whole setup as a Brewfile with one click. WailBrew runs <code>brew bundle dump</code> for you.
        </p>
      </InWailBrew>

      <p>
        Before exporting, it's a good moment to{" "}
        <GuideLink slug="uninstall-homebrew-packages">remove packages you no longer use</GuideLink>.
      </p>
    </>
  ),
};
