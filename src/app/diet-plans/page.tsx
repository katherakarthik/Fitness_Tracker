'use client';

import { useState } from 'react';
import styles from './page.module.css';

const vegPlan = [
    {
        day: 'Day 1',
        meals: [
            { type: 'Breakfast', name: 'Oatmeal with nuts, banana, and plant-based protein powder' },
            { type: 'Lunch', name: 'Quinoa salad with chickpeas, spinach, and lemon-tahini dressing' },
            { type: 'Dinner', name: 'Lentil soup with whole-grain bread' }
        ]
    },
    {
        day: 'Day 2',
        meals: [
            { type: 'Breakfast', name: 'Scrambled tofu with spinach and cherry tomatoes on toast' },
            { type: 'Lunch', name: 'Whole wheat wrap with falafel patties and mixed greens' },
            { type: 'Dinner', name: 'Black bean and sweet potato chili over brown rice' }
        ]
    },
    {
        day: 'Day 3',
        meals: [
            { type: 'Breakfast', name: 'Overnight chia pudding with almond butter and fruit' },
            { type: 'Lunch', name: 'Tofu, farro, and vegetable bowl with edamame' },
            { type: 'Dinner', name: 'Chickpea and spinach curry with coconut milk and brown rice' }
        ]
    },
    {
        day: 'Day 4',
        meals: [
            { type: 'Breakfast', name: 'Vegan protein pancakes topped with fresh fruit' },
            { type: 'Lunch', name: 'Mediterranean quinoa and chickpea bowl' },
            { type: 'Dinner', name: 'Vegan shepherd\'s pie with lentils' }
        ]
    },
    {
        day: 'Day 5',
        meals: [
            { type: 'Breakfast', name: 'Smoothie with spinach, banana, and almond butter' },
            { type: 'Lunch', name: 'Whole wheat pasta with lentil bolognese' },
            { type: 'Dinner', name: 'Veggie burger on whole-grain bun with sweet potato fries' }
        ]
    },
    {
        day: 'Day 6',
        meals: [
            { type: 'Breakfast', name: 'Buckwheat porridge with apple and cinnamon' },
            { type: 'Lunch', name: 'Black bean and corn salad with avocado' },
            { type: 'Dinner', name: 'Stir-fried tofu with mixed vegetables and brown rice' }
        ]
    },
    {
        day: 'Day 7',
        meals: [
            { type: 'Breakfast', name: 'Banana and whole wheat pancakes' },
            { type: 'Lunch', name: 'Dal makhani with brown rice and salad' },
            { type: 'Dinner', name: 'Chickpea curry with quinoa' }
        ]
    }
];

const nonVegPlan = [
    {
        day: 'Day 1',
        meals: [
            { type: 'Breakfast', name: 'Scrambled eggs with spinach, toast, and Greek yogurt' },
            { type: 'Lunch', name: 'Grilled chicken breast with quinoa and steamed vegetables' },
            { type: 'Dinner', name: 'Lean beef stir-fry with brown rice' }
        ]
    },
    {
        day: 'Day 2',
        meals: [
            { type: 'Breakfast', name: 'Whole-wheat toast with peanut butter and banana' },
            { type: 'Lunch', name: 'Turkey wrap with hummus and bell peppers' },
            { type: 'Dinner', name: 'Beef stir-fry with sweet potato' }
        ]
    },
    {
        day: 'Day 3',
        meals: [
            { type: 'Breakfast', name: 'Omelet with vegetables and fruit' },
            { type: 'Lunch', name: 'Tuna melt on whole wheat bread with avocado' },
            { type: 'Dinner', name: 'Baked salmon with roasted asparagus and sweet potato' }
        ]
    },
    {
        day: 'Day 4',
        meals: [
            { type: 'Breakfast', name: 'Oatmeal with almond milk, chia seeds, and protein powder' },
            { type: 'Lunch', name: 'Chicken salad with greens and avocado' },
            { type: 'Dinner', name: 'Pork tenderloin with roasted Brussels sprouts' }
        ]
    },
    {
        day: 'Day 5',
        meals: [
            { type: 'Breakfast', name: 'Toast with scrambled eggs and avocado' },
            { type: 'Lunch', name: 'Grilled fish with large mixed green salad' },
            { type: 'Dinner', name: 'Chicken biryani with cucumber raita' }
        ]
    },
    {
        day: 'Day 6',
        meals: [
            { type: 'Breakfast', name: 'Scrambled eggs with spinach and mushrooms' },
            { type: 'Lunch', name: 'Leftover chicken biryani' },
            { type: 'Dinner', name: 'Baked cod with wild rice and asparagus' }
        ]
    },
    {
        day: 'Day 7',
        meals: [
            { type: 'Breakfast', name: 'French toast with berries and yogurt' },
            { type: 'Lunch', name: 'Grilled chicken Caesar salad' },
            { type: 'Dinner', name: 'Chicken curry with brown rice' }
        ]
    }
];

const weightLossPlan = [
    { day: 'Day 1', meals: [{ type: 'Breakfast', name: 'Greek yogurt with berries' }, { type: 'Lunch', name: 'Grilled chicken salad with lemon dressing' }, { type: 'Dinner', name: 'Stir-fried veggies with tofu' }] },
    { day: 'Day 2', meals: [{ type: 'Breakfast', name: 'Green smoothie (spinach, apple, cucumber)' }, { type: 'Lunch', name: 'Lentil soup with side salad' }, { type: 'Dinner', name: 'Baked fish with steamed broccoli' }] },
    { day: 'Day 3', meals: [{ type: 'Breakfast', name: 'Oatmeal with water and cinnamon' }, { type: 'Lunch', name: 'Quinoa bowl with black beans' }, { type: 'Dinner', name: 'Grilled turkey breast with asparagus' }] },
    { day: 'Day 4', meals: [{ type: 'Breakfast', name: 'Boiled eggs with grapefruit' }, { type: 'Lunch', name: 'Tuna salad lettuce wraps' }, { type: 'Dinner', name: 'Zucchini noodles with tomato sauce' }] },
    { day: 'Day 5', meals: [{ type: 'Breakfast', name: 'Chia pudding with almond milk' }, { type: 'Lunch', name: 'Chickpea salad with cucumber' }, { type: 'Dinner', name: 'Grilled shrimp with cauliflower rice' }] },
    { day: 'Day 6', meals: [{ type: 'Breakfast', name: 'Scrambled egg whites with spinach' }, { type: 'Lunch', name: 'Vegetable broth soup' }, { type: 'Dinner', name: 'Baked chicken with roasted peppers' }] },
    { day: 'Day 7', meals: [{ type: 'Breakfast', name: 'Fruit salad (melon, berries)' }, { type: 'Lunch', name: 'Grilled tofu with mixed greens' }, { type: 'Dinner', name: 'Steamed fish with green beans' }] },
];

const boneHealthPlan = [
    { day: 'Day 1', meals: [{ type: 'Breakfast', name: 'Fortified oatmeal with milk and figs' }, { type: 'Lunch', name: 'Sardine salad with leafy greens' }, { type: 'Dinner', name: 'Tofu stir-fry with broccoli' }] },
    { day: 'Day 2', meals: [{ type: 'Breakfast', name: 'Yogurt parfait with almonds' }, { type: 'Lunch', name: 'Spinach and cheese quiche' }, { type: 'Dinner', name: 'Salmon with roasted kale' }] },
    { day: 'Day 3', meals: [{ type: 'Breakfast', name: 'Smoothie with fortified orange juice and kale' }, { type: 'Lunch', name: 'White bean soup' }, { type: 'Dinner', name: 'Chicken curry with yogurt sauce' }] },
    { day: 'Day 4', meals: [{ type: 'Breakfast', name: 'Cottage cheese with fruit' }, { type: 'Lunch', name: 'Tuna sandwich on fortified bread' }, { type: 'Dinner', name: 'Lentil soup with collard greens' }] },
    { day: 'Day 5', meals: [{ type: 'Breakfast', name: 'Scrambled eggs with cheese' }, { type: 'Lunch', name: 'Greek salad with feta' }, { type: 'Dinner', name: 'Baked mackerel with okra' }] },
    { day: 'Day 6', meals: [{ type: 'Breakfast', name: 'Chia pudding with soy milk' }, { type: 'Lunch', name: 'Edamame salad' }, { type: 'Dinner', name: 'Broccoli and cheese soup' }] },
    { day: 'Day 7', meals: [{ type: 'Breakfast', name: 'Ricotta pancakes' }, { type: 'Lunch', name: 'Salmon burger' }, { type: 'Dinner', name: 'Tofu and bok choy stir-fry' }] },
];

const eyeHealthPlan = [
    { day: 'Day 1', meals: [{ type: 'Breakfast', name: 'Scrambled eggs with spinach' }, { type: 'Lunch', name: 'Carrot and sweet potato soup' }, { type: 'Dinner', name: 'Grilled salmon with asparagus' }] },
    { day: 'Day 2', meals: [{ type: 'Breakfast', name: 'Oatmeal with walnuts and blueberries' }, { type: 'Lunch', name: 'Kale salad with orange slices' }, { type: 'Dinner', name: 'Baked trout with roasted carrots' }] },
    { day: 'Day 3', meals: [{ type: 'Breakfast', name: 'Papaya and yogurt bowl' }, { type: 'Lunch', name: 'Spinach and feta omelet' }, { type: 'Dinner', name: 'Tuna steak with bell peppers' }] },
    { day: 'Day 4', meals: [{ type: 'Breakfast', name: 'Sweet potato hash with eggs' }, { type: 'Lunch', name: 'Lentil stew with swiss chard' }, { type: 'Dinner', name: 'Mackerel with green beans' }] },
    { day: 'Day 5', meals: [{ type: 'Breakfast', name: 'Smoothie with kale and mango' }, { type: 'Lunch', name: 'Avocado toast with egg' }, { type: 'Dinner', name: 'Shrimp stir-fry with broccoli' }] },
    { day: 'Day 6', meals: [{ type: 'Breakfast', name: 'Chia pudding with almonds' }, { type: 'Lunch', name: 'Pumpkin soup' }, { type: 'Dinner', name: 'Cod with corn and peppers' }] },
    { day: 'Day 7', meals: [{ type: 'Breakfast', name: 'Blueberry pancakes' }, { type: 'Lunch', name: 'Salmon salad with sunflower seeds' }, { type: 'Dinner', name: 'Turkey chili with sweet potato' }] },
];

export default function DietPlans() {
    const [activeTab, setActiveTab] = useState<'veg' | 'non-veg'>('veg');
    const [activeGoal, setActiveGoal] = useState<'muscle' | 'weight-loss' | 'bone' | 'eye'>('muscle');

    const getPlan = () => {
        switch (activeGoal) {
            case 'weight-loss': return weightLossPlan;
            case 'bone': return boneHealthPlan;
            case 'eye': return eyeHealthPlan;
            default: return activeTab === 'veg' ? vegPlan : nonVegPlan;
        }
    };

    const currentPlan = getPlan();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Expert Diet Plans</h1>
                <p className={styles.subtitle}>Choose a goal to see your personalized meal plan.</p>
            </header>

            <div className={styles.goalGrid}>
                <div
                    className={`${styles.goalCard} ${activeGoal === 'muscle' ? styles.activeGoal : ''}`}
                    onClick={() => setActiveGoal('muscle')}
                >
                    <div className={styles.goalIcon}>💪</div>
                    <div className={styles.goalTitle}>Muscle Gain</div>
                    <div className={styles.goalDesc}>High protein for strength</div>
                </div>
                <div
                    className={`${styles.goalCard} ${activeGoal === 'weight-loss' ? styles.activeGoal : ''}`}
                    onClick={() => setActiveGoal('weight-loss')}
                >
                    <div className={styles.goalIcon}>🏃</div>
                    <div className={styles.goalTitle}>Rapid Weight Loss</div>
                    <div className={styles.goalDesc}>Low calorie, high fiber</div>
                </div>
                <div
                    className={`${styles.goalCard} ${activeGoal === 'bone' ? styles.activeGoal : ''}`}
                    onClick={() => setActiveGoal('bone')}
                >
                    <div className={styles.goalIcon}>🦴</div>
                    <div className={styles.goalTitle}>Bone Health</div>
                    <div className={styles.goalDesc}>Calcium & Vitamin D rich</div>
                </div>
                <div
                    className={`${styles.goalCard} ${activeGoal === 'eye' ? styles.activeGoal : ''}`}
                    onClick={() => setActiveGoal('eye')}
                >
                    <div className={styles.goalIcon}>👁️</div>
                    <div className={styles.goalTitle}>Eye Health</div>
                    <div className={styles.goalDesc}>Vitamin A & Omega-3s</div>
                </div>
            </div>

            {activeGoal === 'muscle' && (
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'veg' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('veg')}
                    >
                        Vegetarian
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'non-veg' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('non-veg')}
                    >
                        Non-Vegetarian
                    </button>
                </div>
            )}

            <div className={styles.grid}>
                {currentPlan.map((day, index) => (
                    <div key={index} className={styles.dayCard}>
                        <div className={styles.dayHeader}>{day.day}</div>
                        <div className={styles.mealList}>
                            {day.meals.map((meal, mealIndex) => (
                                <div key={mealIndex} className={styles.meal}>
                                    <div className={styles.mealIcon}>
                                        {meal.type === 'Breakfast' ? '🌅' : meal.type === 'Lunch' ? '☀️' : '🌙'}
                                    </div>
                                    <div className={styles.mealContent}>
                                        <div className={styles.mealType}>{meal.type}</div>
                                        <div className={styles.mealName}>{meal.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {activeGoal === 'eye' && (
                <div className={styles.tipSection}>
                    <h3 className={styles.tipTitle}>👀 Eye Safety Tip: The 20-20-20 Rule</h3>
                    <p className={styles.tipContent}>
                        To reduce eye strain from screens, every <strong>20 minutes</strong>, look at something <strong>20 feet away</strong> for at least <strong>20 seconds</strong>.
                        Also, remember to blink often to keep your eyes moist!
                    </p>
                </div>
            )}

            {activeGoal === 'weight-loss' && (
                <div className={styles.tipSection}>
                    <h3 className={styles.tipTitle}>⚠️ Important Note</h3>
                    <p className={styles.tipContent}>
                        Rapid weight loss (10kg in 15 days) is aggressive and may not be suitable for everyone.
                        Ensure you stay hydrated and consult a doctor before starting any extreme diet.
                        Sustainable weight loss is typically 0.5-1kg per week.
                    </p>
                </div>
            )}
        </div>
    );
}
