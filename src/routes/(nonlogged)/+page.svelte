<script lang="ts">
	import { Icon, Beaker } from 'svelte-hero-icons';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
	<div
		class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
	>
		<div
			class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
		>
			<div class="lg:pr-4">
				<div class="lg:max-w-lg">
					<p class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
						Empower Yourself
					</p>
					<h1
						class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-400 sm:text-4xl"
					>
						Achieve Your Dreams: Personal Goal Tracker
					</h1>
					<p class="mt-6 sm:text-xl sm:leading-8 text-gray-700 dark:text-gray-100">
						Personal Goal Tracker, a comprehensive and intuitive system designed to help individuals
						set, track, and achieve their personal goals. Whether you&apos;re striving to improve
						your fitness, advance your career, learn new skills, or enhance your overall well-being,
						this goal tracking system is your ultimate companion on your journey to success.
					</p>
				</div>
			</div>
		</div>
		<div
			class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
		>
			<img
				class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
				src="/hero.webp"
				alt=""
				width={1024}
				height={1024}
			/>
		</div>
		<div
			class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
		>
			<div class="lg:pr-4">
				<div class="max-w-xl text-base leading-7 text-gray-700 dark:text-gray-100 lg:max-w-lg">
					<p>
						With the Personal Goal Tracker, you can easily set specific, measurable, attainable,
						relevant, and time-bound (SMART) goals that align with your aspirations. The system
						offers a user-friendly interface that allows you to input and organize your goals
						effectively. Once your goals are set, the Personal Goal Tracker provides ongoing support
						and motivation through reminders, milestone celebrations, and insightful feedback.
					</p>
					<ul class="mt-8 space-y-8 text-gray-600 dark:text-gray-100">
						<li class="flex gap-x-3">
							<Icon src={Beaker} class="mt-1 h-6 w-6 flex-none" />
							<span>
								<strong class="font-semibold text-gray-900 dark:text-gray-400">
									Goal Setting Made Easy:
								</strong>{' '}
								Effortlessly define your goals using the SMART framework, ensuring clarity and focus.
							</span>
						</li>
						<li class="flex gap-x-3">
							<Icon src={Beaker} class="mt-1 h-6 w-6 flex-none" />
							<span>
								<strong class="font-semibold text-gray-900 dark:text-gray-400">
									Progress Tracking:
								</strong>{' '}
								Monitor your progress in real-time, with visual indicators and detailed statistics to
								keep you motivated.
							</span>
						</li>
						<li class="flex gap-x-3">
							<Icon src={Beaker} class="mt-1 h-6 w-6 flex-none" />
							<span>
								<strong class="font-semibold text-gray-900 dark:text-gray-400">
									Reminders and Notifications:
								</strong>{' '}
								Stay on track with timely reminders and notifications, helping you maintain consistency
								and accountability.
							</span>
						</li>
						<li class="flex gap-x-3">
							<Icon src={Beaker} class="mt-1 h-6 w-6 flex-none" />
							<span>
								<strong class="font-semibold text-gray-900 dark:text-gray-400">
									Milestone Celebrations:
								</strong>{' '}
								Celebrate your achievements along the way, as the Personal Goal Tracker recognizes and
								acknowledges your progress.
							</span>
						</li>
						<li class="flex gap-x-3">
							<Icon src={Beaker} class="mt-1 h-6 w-6 flex-none" />
							<span>
								<strong class="font-semibold text-gray-900 dark:text-gray-400">
									Insightful Analytics:
								</strong>{' '}
								Gain valuable insights into your performance and patterns, enabling you to make informed
								adjustments and optimize your goal strategy.
							</span>
						</li>
						<li class="flex gap-x-3">
							<Icon src={Beaker} class="mt-1 h-6 w-6 flex-none" />
							<span>
								<strong class="font-semibold text-gray-900 dark:text-gray-400">
									Customization and Personalization:
								</strong>{' '}
								Tailor the Personal Goal Tracker to fit your unique preferences and needs, making it
								a truly personalized experience.
							</span>
						</li>
						<li class="flex gap-x-3">
							<Icon src={Beaker} class="mt-1 h-6 w-6 flex-none" />
							<span>
								<strong class="font-semibold text-gray-900 dark:text-gray-400">
									Community and Support:
								</strong>{' '}
								Connect with a community of like-minded individuals, sharing your goals, progress, and
								experiences, and offering support and encouragement.
							</span>
						</li>
					</ul>
					<p class="mt-8">
						Embark on a transformative journey towards self-improvement and personal growth with the
						Personal Goal Tracker. Start today and witness the power of focused goal setting,
						consistent progress tracking, and the joy of celebrating your accomplishments. Maximize
						your potential and achieve the life you&apos;ve always envisioned.
					</p>
					<h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
						No server? No problem.
					</h2>
					<p class="mt-6">
						Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu
						ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh.
						Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus
						ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
					</p>
				</div>
			</div>
		</div>
	</div>
</main>
